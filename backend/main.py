from fastapi import FastAPI, Depends, Form, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from sqlalchemy.orm import Session
import database, models
from database import engine, Base


app = FastAPI()
models.Base.metadata.create_all(bind=engine)


origins = [
    "http://localhost:3000", 
    "http://localhost:8000",  
    "https://alexandrunitulescu.onrender.com"  
]


app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/api/message")
async def submit_form(form_email: str = Form(...), form_subject: str = Form(...), form_message: str = Form(...), db: Session = Depends(database.get_db)):
    try:
        msg_model = models.Message(email = form_email, subject = form_subject, message = form_message)
        db.add(msg_model)
        db.commit()
    except Exception as e:
            db.rollback()
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail=str(e))
    finally:
        db.close()
    return JSONResponse(content={"message": "Data stored successfully."}, status_code=200)

@app.get("/api/test")
def read_root():
    return {"message": "FastAPI backend is running!"}
