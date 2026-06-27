from fastapi import APIRouter
from pydantic import BaseModel

from app.services.chat_service import chat_service

router = APIRouter()


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
async def chat(request: ChatRequest):

    return await chat_service.generate_response(
        request.message
    )