from fastapi import APIRouter

from app.vectordb.chroma_client import collection

from app.service.embedding_service import get_embedding

router = APIRouter()


@router.post("/vector/add")
async def add_document(data: dict):

    text = data["text"]

    embedding = get_embedding(text)

    collection.add(

        ids=[str(hash(text))],

        documents=[text],

        embeddings=[embedding]

    )

    return {

        "success": True,

        "message": "Document Added"

    }


@router.post("/vector/search")
async def search_document(data: dict):

    query = data["query"]

    embedding = get_embedding(query)

    results = collection.query(

        query_embeddings=[embedding],

        n_results=5

    )

    return results