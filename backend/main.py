from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import post_router, form_router
import models
from database import engine

app = FastAPI()

app.include_router(post_router.router)
app.include_router(form_router.router)

models.Base.metadata.create_all(bind=engine)

origins = [
    "http://localhost",
    "http://localhost:3000", 

]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)
