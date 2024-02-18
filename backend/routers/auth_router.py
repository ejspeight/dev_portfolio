from fastapi import FastAPI, HTTPException, status, Depends
from fastapi.security import APIKeyHeader
import os

app = FastAPI()

API_KEY = os.environ.get("API_KEY")
API_KEY_NAME = os.environ.get("API_KEY_NAME")

api_key_header = APIKeyHeader(name=API_KEY_NAME)

async def verify_api_key(api_key: str = Depends(api_key_header)):
    if api_key != API_KEY:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid API key",
        )
    return api_key