from sqlalchemy import Column, Integer, String, Text, TIMESTAMP
from database import Base

class Post(Base):
    __tablename__ = 'posts'

    post_id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    title = Column(String(255), nullable=False)
    content = Column(Text)
    author_id = Column(Integer)
    created_at = Column(TIMESTAMP, server_default='CURRENT_TIMESTAMP')


