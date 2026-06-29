from fastapi import APIRouter
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

from app.services.stream_service import stream_service

router = APIRouter()


class StreamRequest(BaseModel):
    message: str


@router.post("/stream")
async def stream(request: StreamRequest):

    return StreamingResponse(
        stream_service.stream(request.message),
        media_type="text/plain"
    )