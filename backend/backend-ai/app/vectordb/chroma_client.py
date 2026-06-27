import chromadb

from app.config.settings import settings

client = chromadb.PersistentClient(
    path=settings.CHROMA_DB
)

collection = client.get_or_create_collection(
    name="netsentinel_documents"
)