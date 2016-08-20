FROM alpine:3.3

RUN apk add --update nodejs python build-base && npm i -g gulp

WORKDIR /data

COPY package.json /data/package.json

RUN npm install

# Define default command.
CMD gulp