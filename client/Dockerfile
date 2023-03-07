# Dockerfile for React client

# Build react client
FROM node:10.16-alpine

# Working dir for app
WORKDIR /usr/src/app

COPY package*.json ./

## install deps
RUN npm install --silent

# copy local files to app folder
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
