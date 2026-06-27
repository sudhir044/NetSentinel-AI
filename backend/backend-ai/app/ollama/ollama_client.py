from langchain_ollama import ChatOllama

from app.config.settings import settings

llm = ChatOllama(
    base_url=settings.OLLAMA_BASE_URL,
    model=settings.OLLAMA_MODEL,
    temperature=0.2
)