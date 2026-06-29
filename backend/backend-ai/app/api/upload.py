from fastapi import APIRouter, UploadFile, File

from app.service.upload_service import upload_service

router = APIRouter()

@router.post("/upload/pdf")
async def upload_pdf(file: UploadFile = File(...)):
    if not file.filename.endswith('.pdf'):
        return {"success": False, "message": "Only PDF files are allowed"}
        
    result = await upload_service.process_pdf(file)
    return result