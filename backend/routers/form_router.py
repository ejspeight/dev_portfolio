from fastapi import APIRouter

router = APIRouter()

@router.post("/submit_form/")
async def submit_form(name: str, email: str, message: str):
    return {"message": "Contact form submitted successfully"}

