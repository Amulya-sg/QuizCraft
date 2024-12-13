import scrapy
import json
import sys
from scrapy.crawler import CrawlerProcess

class WikiSpider(scrapy.Spider):
    name = "wiki_spider"

    def __init__(self, *args, **kwargs):
        super(WikiSpider, self).__init__(*args, **kwargs)
        self.url = kwargs.get('url')

    def start_requests(self):
        if self.url:
            yield scrapy.Request(url=self.url, callback=self.parse)
        else:
            self.logger.error("No URL provided")

    def parse(self, response):
        scraped_data = {
            "url": response.url,
            "title": response.xpath('//h1/text()').get() or response.xpath('//title/text()').get(),
            "body": ''.join(response.xpath('//p//text()').getall()).strip(),
        }
        
        try:
            with open("scraped_results.json", "r") as file:
                existing_data = json.load(file)
        except (FileNotFoundError, json.JSONDecodeError):
            existing_data = []

        existing_data.append(scraped_data)

        with open("scraped_results.json", "w") as file:
            json.dump(existing_data, file, indent=4)

if __name__ == "__main__":
    url = sys.argv[1] if len(sys.argv) > 1 else None

    process = CrawlerProcess(settings={
        "LOG_LEVEL": "INFO",
    })
    
    process.crawl(WikiSpider, url=url)
    process.start()