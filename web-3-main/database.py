import sqlalchemy as sql
import sqlalchemy.ext.declarative as declarative
import sqlalchemy.orm as orm

connection_string = "mysql+mysqlconnector://root:1234@127.0.0.1:3306/myapp"

engine = sql.create_engine(connection_string, echo=True)

SessionLocal = orm.sessionmaker(bind=engine, autocommit=False, autoflush=False)

Base = declarative.declarative_base()