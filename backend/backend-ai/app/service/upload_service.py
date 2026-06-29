import os
import uuid

from fastapi import UploadFile
from langchain_text_splitters import RecursiveCharacterTextSplitter

from app.config.settings import settings
from app.utils.pdf_loader import PDFLoader
from app.services.embedding_service import get_embedding
from app.vectordb.chroma_client import collection


class UploadService:

    async def upload_pdf(self, file: UploadFile):

        # Create uploads folder if it doesn't exist
        os.makedirs(settings.UPLOAD_FOLDER, exist_ok=True)

        # Save uploaded PDF
        file_path = os.path.join(
            settings.UPLOAD_FOLDER,
            file.filename
        )

        with open(file_path, "wb") as buffer:
            buffer.write(await file.read())

        # Extract text
        text = PDFLoader.extract_text(file_path)

        # Split into chunks
        splitter = RecursiveCharacterTextSplitter(
            chunk_size=800,
            chunk_overlap=100
        )

        chunks = splitter.split_text(text)

        # Store in ChromaDB
        for chunk in chunks:

            embedding = get_embedding(chunk)

            collection.add(
                ids=[str(uuid.uuid4())],
                documents=[chunk],
                embeddings=[embedding],
                metadatas=[
                    {
                        "source": file.filename
                    }
                ]
            )

        return {
            "success": True,
            "filename": file.filename,
            "chunks": len(chunks),
            "message": "Document uploaded successfully."
        }


upload_service = UploadService()