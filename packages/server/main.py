# todo the api
#
from fastapi import FastAPI
import uvicorn

app = FastAPI()


@app.get("/forests", response_model=int)
def get_all_forests():
    """
    TODO: return all
    TODO: paginate
    """
    return


@app.get("/forests/{forest_uuid}", response_model=int)
def get_forest():
    """
    TODO
    """
    return


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port="8000")
