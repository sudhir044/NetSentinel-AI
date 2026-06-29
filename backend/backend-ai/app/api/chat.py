from fastapi import APIRouter

from app.schemas.chat import ChatRequest, ChatResponse

from app.services.chat_service import chat_service

router = APIRouter()


@router.post(
    "/chat",
    response_model=ChatResponse
)
async def chat(request: ChatRequest):

    answer = await chat_service.chat(
        request.message
    )

    return ChatResponse(

        success=True,

        response=answer

    )