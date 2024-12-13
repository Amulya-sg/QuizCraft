# Command: uvicorn app:app --host 0.0.0.0 --port 8000 --reload

from fastapi import FastAPI, File, UploadFile, Form
from transformers import AutoModelForCausalLM, AutoTokenizer, pipeline
from sentence_transformers import SentenceTransformer
import torch
import faiss
import numpy as np
from docx import Document
import time
from fastapi.middleware.cors import CORSMiddleware
from googlesearch import search
import subprocess
import json

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = AutoModelForCausalLM.from_pretrained(
    "microsoft/Phi-3.5-mini-instruct",
    device_map="auto",
    torch_dtype="auto",
    cache_dir="./micro-chat",
    trust_remote_code=True
)
tokenizer = AutoTokenizer.from_pretrained("microsoft/Phi-3.5-mini-instruct", cache_dir="C:/Users/Dell/Desktop/spaceapps/micro-chat")
pipe = pipeline("text-generation", model=model, tokenizer=tokenizer)

embedding_model = SentenceTransformer('sentence-transformers/all-MiniLM-L6-v2', cache_folder="C:/Users/Dell/Desktop/spaceapps/embed-model")

dimension = 384 
index = faiss.IndexFlatL2(dimension)
vector_text_mapping = []


def find_reliable_link(topic):
    reliable_sites = ["wikipedia.org", "britannica.com", "plato.stanford.edu"]
    for site in reliable_sites:
        search_query = f'{topic} site:{site}'
        for url in search(search_query, num=5):
            if site in url:
                return url
    return None

def scrape_topic(topic: str):
    try:
        url = find_reliable_link(topic)
        if not url:
            raise ValueError("No reliable URL found.")

        process = subprocess.Popen(
            ["python", "wiki_scrapy_main.py", url],
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE
        )
        stdout, stderr = process.communicate()

        if process.returncode != 0:
            raise RuntimeError(stderr.decode("utf-8"))

        with open("scraped_results.json", "r") as file:
            scraped_data = json.load(file)

        for item in scraped_data:
            if item.get("url") == url:
                return  item.get("body")

        raise ValueError("Scraped data not found for the given URL.")

    except Exception as e:
        raise e


def group_sentences(sentences, group_size=15):
    grouped = [' '.join(sentences[i:i+group_size]) for i in range(0, len(sentences), group_size)]
    return grouped


def extract_text_from_docx(file):
    """Extract text from a Word document directly from memory."""
    doc = Document(file)
    full_text = []
    for paragraph in doc.paragraphs:
        full_text.append(paragraph.text)
    return "\n".join(full_text)


def store_text_in_vector_db(text):
    """Generate embeddings for text and store them in the vector database."""
    global index, vector_text_mapping
    sentences = text.split(".")
    sentences = group_sentences(sentences)
    embeddings = embedding_model.encode(sentences, convert_to_tensor=False)
    embeddings = np.array(embeddings)
    index.add(embeddings)
    vector_text_mapping = []
    vector_text_mapping.extend(sentences)


def retrieve_relevant_text(query, top_k=3):
    """Retrieve the most relevant text chunks based on the query."""
    global index, vector_text_mapping
    query_embedding = embedding_model.encode([query], convert_to_tensor=False)
    query_embedding = np.array(query_embedding).astype(np.float32)
    distances, indices = index.search(query_embedding, top_k)

    if len(distances[0]) == 0 or np.all(distances[0] >= 1.3):
        return None

    retrieved_text = [vector_text_mapping[i] for i in indices[0]]
    return " ".join(retrieved_text)


@app.get("/")
async def root():
    return {"message": "Hello World"}
@app.post("/generate-questionsss")
async def generate_questions(
    file: UploadFile | None = File(None),  
    topic: str | None = Form(None),        
    question_type: str = Form("MCQs"),
    number_questions: int = Form(6)
):
    # Return mock data for frontend testing
    dummy_questions = {
        "generated_questions": [
            f"Sample {question_type} question {i+1} on topic '{topic}'" for i in range(number_questions)
        ],
        "time_taken": "0.01 seconds"
    }
    return dummy_questions


@app.post("/generate-questions")
async def generate_questions(
    file: UploadFile = File(None),  
    topic: str = Form(None),        
    question_type: str = Form("Mcqs"),
    number_questions: int = Form(6)
):
    try:
        document_text = ""
        
        if file and topic:
            document_text = extract_text_from_docx(file.file)
            store_text_in_vector_db(document_text)
            query = f"{topic}"
            relevant_text = retrieve_relevant_text(query)
        else:
            return {"generated_questions": "Please provide both topic and a Word document."}

        if relevant_text is None:
            # Integrate the code here
            try:
                # Attempt to scrape the topic from reliable sources
                # scraped_result = scrape_topic(topic)
                # Assuming scraped_result is of the form {"scraped_data": {"url": ..., "content": ...}}
                scraped_content =scrape_topic(topic)
                if scraped_content:
                    
                    store_text_in_vector_db(scraped_content)
                    # Attempt to retrieve relevant text again
                    relevant_text = retrieve_relevant_text(query)
                    if relevant_text is None:
                        return {"generated_questions": "No relevant text found even after scraping."}
                else:
                    return {"generated_questions": "No content found in scraped data."}
            except Exception as e:
                return {"error": str(e)}

        start_time = time.time()
        messages = [
            {"role": "system", "content": f"You are a helpful AI assistant who generates {number_questions} {question_type} questions from given text."},
            {"role": "user", "content": f"Using the following '{relevant_text}' , generate {number_questions} {question_type} questions on the topic '{topic}'"},
        ]
        generation_args = {
            "max_new_tokens": 5,
            "return_full_text": False,
            "temperature": 0.1,
            "do_sample": False,
        }
        output = pipe(messages, **generation_args)

        end_time = time.time()
        elapsed_time = end_time - start_time

        if output and len(output) > 0 and 'generated_text' in output[0]:
            return {
                "generated_questions": output[0]['generated_text'],
                "time_taken": f"{elapsed_time:.2f} seconds"
            }
        else:
            return {"error": "No output generated by the model."}

    except Exception as e:
        return {"error": str(e)}
