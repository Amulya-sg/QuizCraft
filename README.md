# Quiz Generator using RAG, FAISS, and Phi-3.5

This project is an intelligent **Automatic Quiz Generator** that leverages **Retrieval-Augmented Generation (RAG)**, **FAISS vector database**, and **Microsoft's Phi-3.5 model** to create quizzes from user-provided topics and documents.

## 🚀 Features

- 🔍 **Smart Content Retrieval**: 
  - Uses RAG to ground quiz generation in actual knowledge.
  - If the uploaded document is off-topic or insufficient, the system scrapes the web for better context.
  
- 🗂️ **Flexible Input**:
  - Accepts a **topic** and a **related document**  as input.
  
- 📝 **Multiple Quiz Formats**:
  - **Multiple Choice Questions (MCQs)**
  - **True/False**
  - **Fill in the Blanks**
  - **Question & Answer**

- 🧠 **Knowledge-Powered**:
  - Uses **FAISS** to index document chunks for semantic search.
  - Generates questions with **Microsoft Phi-3.5** LLM.

---

## 📦 Tech Stack

- **LLM**: Microsoft **Phi-3.5**
- **RAG**: Custom Retrieval-Augmented Generation pipeline
- **Vector DB**: **FAISS**
- **Web Scraping**: Fallback if provided content is irrelevant to topic using **Spyder**

---

## 🛠️ How It Works

1. **User Input**:
   - Topic (e.g., "Photosynthesis")
   - Related document (optional)
   - Desired quiz type (MCQ, Q&A, T/F, Blanks)

2. **Document Validation**:
   - Check if the uploaded document aligns with the topic.
   - If not, use web scraping to retrieve relevant content.

3. **Chunking & Embedding**:
   - Split the content into manageable chunks.
   - Convert chunks into vector embeddings using FAISS.

4. **RAG Pipeline**:
   - Retrieve relevant chunks using semantic search.
   - Pass retrieved context and topic into the Phi-3.5 model for quiz generation.

5. **Quiz Generation**:
   - The model outputs questions in a txt document which can be downloaded.



