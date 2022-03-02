from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, Float, String, Text
import uuid

Base = declarative_base()


class Forest(Base):
    __tablename__ = "forests"
    uuid = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4)
    country = Column(String)
    type = Column(String)
    short_description = Column(String)
    # TODO: use GeoJSON types
    # TODO: use nested relationship under location w/relationship
    longitude = Column(Float)
    latitude = Column(Float)
    image_url = Column(String, nullable=True)
    covered_area = Column(Integer, nullable=True)
    carbon_stored = Column(Integer, nullable=True)
    change_in_30_days = Column(Integer, nullable=True)
    long_description = Column(Text, nullable=True)
