from pydantic import BaseModel, UUID4
from typing import Optional


class Forest(BaseModel):
    # TODO optionals
    uuid: UUID4
    # location: todo
    country: str
    short_description: str
    type: str
    covered_area: Optional[int]
    image_url: Optional[str]
    carbon_stored: Optional[int]
    change_in_30_days: Optional[int]
    long_description: Optional[str]

    class Config:
        # SQLAlchemy -> JSON
        orm_mode = True
