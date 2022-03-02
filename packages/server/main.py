import json
import os
from dotenv import load_dotenv

from fastapi import FastAPI
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from fastapi_sqlalchemy import DBSessionMiddleware
from fastapi_sqlalchemy import db

from models import Forest as ModelForest
from schema import Forest as SchemaForest

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
load_dotenv(os.path.join(BASE_DIR, ".env"))

app = FastAPI()

app.add_middleware(DBSessionMiddleware, db_url=os.environ["DATABASE_URL"])

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


def apply_mocks():
    """
    For development / instead of distributing a database dump, seeding data from mocks.json each run.
    """
    with db():

        with open("./data/mocks.json") as mocks_file:
            mocks_data = json.load(mocks_file)
            for forest in mocks_data["forests"]:
                db_forest = ModelForest(**forest)
                db.session.add(db_forest)
                db.session.commit()
    return


# (development) Only apply mocks if not already seeded
with db():
    if not db.session.query(ModelForest).count() > 0:
        apply_mocks()


@app.get("/forest")
def get_all_forests(offset: int = 0, limit: int = 2):
    """
    TODO: test pagination
    TODO: in production, would not overfetch (e.g., could use GraphQL or better query parameters)
    """
    forests = db.session.query(ModelForest).offset(offset).limit(limit).all()
    return forests


@app.get("/forest/{forest_country}", response_model=SchemaForest)
def get_forest(forest_country):
    """
    TODO would search by primary key instead
    TODO would make formatting more robust
    """
    forest = (
        db.session.query(ModelForest)
        .filter(ModelForest.country == forest_country.capitalize().replace("-", " "))
        .first()
    )

    if not forest:
        raise HTTPException(
            404, "Forest with country: {forest_country} not found.")

    return forest


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port="8000")
