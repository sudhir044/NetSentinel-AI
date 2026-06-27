from fastapi import APIRouter
from pydantic import BaseModel

from app.services.rag_service import rag_service

router = APIRouter()


class RagRequest(BaseModel):
    question: str


@router.post("/rag")
async def rag(request: RagRequest):

    return await rag_service.ask(
        request.question
    )