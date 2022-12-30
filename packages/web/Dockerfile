FROM node:16-alpine3.14

WORKDIR /usr/src/app
RUN apk update && \
    apk add git
COPY package.json yarn.lock* ./
RUN yarn
RUN yarn global add vite

COPY . ./

ENTRYPOINT ["yarn", "dev"]
