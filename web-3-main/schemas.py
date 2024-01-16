import pydantic as pydantic

class UserBase(pydantic.BaseModel):
    name: str
    email: str
    password: str

class UserCreate(UserBase):
    class Config:
        orm_mode = True

class User(UserBase):
    id: int

    class Config:
        orm_mode = True

class ReviewBase(pydantic.BaseModel):
    review_text: str
    user_id: str