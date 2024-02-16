from fastapi import FastAPI
from routers import post_router
import models
from database import engine

app = FastAPI()

app.include_router(post_router.router)

models.Base.metadata.create_all(bind=engine)
