FROM python:3.9

WORKDIR /usr/src/server

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN pip install pipenv

COPY Pipfile* ./
RUN pipenv install --dev --system

COPY . ./

ENTRYPOINT [ "bash", "-c", "alembic upgrade head && uvicorn main:app --host 0.0.0.0 --port 8000 --reload" ]
