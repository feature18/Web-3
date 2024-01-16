import sqlalchemy as sql
import sqlalchemy.orm as orm

import database as database
import passlib.hash as _hash


class User(database.Base):
    __tablename__ = "users"
    id = sql.Column(sql.Integer, primary_key=True, index=True, autoincrement=True)
    name = sql.Column(sql.String, index=True, unique=True)
    email = sql.Column(sql.String, index=True, unique=True)
    reviews = orm.relationship("Review", back_populates="owner")
    password = sql.Column(sql.String)
    def verify_password(self, password: str):
        return _hash.bcrypt.verify(password, self.password)


class Review(database.Base):
    __tablename__ = "reviews"
    review_id = sql.Column(sql.Integer, primary_key=True, index=True, autoincrement=True)
    review_text = sql.Column(sql.String)
    user_id = sql.Column(sql.Integer, sql.ForeignKey("users.id"))
    owner = orm.relationship("User", back_populates="reviews")


class Book(database.Base):
    __tablename__ = "books"
    id = sql.Column(sql.Integer, primary_key=True, index=True, autoincrement=True)
    name = sql.Column(sql.String, index=True)
    description = sql.Column(sql.Text)
    file_path = sql.Column(sql.String)
