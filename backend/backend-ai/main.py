from fastapi import FastAPI
from app.api.vector import router as vector_router

from app.config.settings import settings

from app.api.chat import router as chat_router

from app.api.rag import router as rag_router

from app.api.upload import router as upload_router

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.APP_VERSION
)

app.include_router(
    chat_router,
    prefix="/api",
    tags=["AI Chat"]
)
app.include_router(
    vector_router,
    prefix="/api",
    tags=["Vector DB"]
)

app.include_router(
    rag_router,
    prefix="/api",
    tags=["RAG"]
)

app.include_router(
    upload_router,
    prefix="/api",
    tags=["Upload"]
)


@app.get("/")
async def home():
    return {
        "message": settings.APP_NAME
    }