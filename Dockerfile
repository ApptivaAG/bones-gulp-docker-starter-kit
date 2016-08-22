FROM node:5

RUN npm i -g gulp

WORKDIR /data

COPY package.json /data/package.json

RUN npm install

# Define default command.
CMD gulp