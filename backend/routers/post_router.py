from fastapi import APIRouter, HTTPException, Depends, status, Depends
from sqlalchemy.orm import Session
from pydantic import BaseModel
from typing import List, Annotated
import models
from database import SessionLocal

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

class PostBase(BaseModel):
    title: str
    content: str
    author_id: int

db_dependency = Depends(get_db)

@router.post("/posts/", status_code=status.HTTP_201_CREATED)
async def create_post(post: PostBase, db: Session = db_dependency):
    db_post = models.Post(**post.dict())
    db.add(db_post)
    db.commit()
    db.refresh(db_post)
    return db_post

@router.get("/posts/{post_id}", status_code=status.HTTP_200_OK)
async def read_post(post_id: int, db: Session = db_dependency):
    post = db.query(models.Post).filter(models.Post.post_id == post_id).first()
    if post is None:
        raise HTTPException(status_code=404, detail='Post not found')
    return post


@router.get("/posts/", status_code=status.HTTP_200_OK)
async def get_all_posts(db: Session = db_dependency):
    posts = db.query(models.Post).all()
    if posts is None:
        raise HTTPException(status_code=404, detail='Posts not found')
    return posts