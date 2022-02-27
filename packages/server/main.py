# todo the api
#
import os
import typing
from dotenv import load_dotenv
from fastapi import FastAPI
import uvicorn
from fastapi import FastAPI
from fastapi_sqlalchemy import DBSessionMiddleware
from fastapi_sqlalchemy import db

from models import Forest as ModelForest
from schema import Forest as SchemaForest

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(BASE_DIR, ".env"))

app = FastAPI()

app.add_middleware(DBSessionMiddleware, db_url=os.environ["DATABASE_URL"])

@app.get("/forest")
def get_all_forests(offset: int = 0, limit: int = 2):
    """
    TODO: return all
    TODO: paginate
    TODO: would not overfetch (e.g., could use GraphQL or better query parameters)
    """
    forests = db.session.query(ModelForest).offset(offset).limit(limit).all()
    return forests


@app.get("/forest/{forest_uuid}", response_model=SchemaForest)
def get_forest():
    """
    TODO
    """

    # TODO handle bad uuid 400
    
    # TODO handle DNE 404

    forest = db.session.query(ModelForest).filter(ModelForest.uuid == forest_uuid)
    return


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port="8000")
