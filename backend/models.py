from sqlalchemy import Column, Enum, Float, Date, DateTime, Integer, String, func
from database import Base

class Message(Base):
    __tablename__ = "messages"

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String)
    subject = Column(String)
    message = Column(String)
    created_at = Column(DateTime, server_default=func.current_timestamp())
