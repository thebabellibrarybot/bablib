# Pull Docker Hub base image
#FROM node:14.16.0-alpine3.10
# Set working directory
#WORKDIR /usr/app
# Install app dependencies
#COPY package*.json ./
#RUN npm install -qyg nodemon@2.0.7
#RUN npm install -qy
# Copy app to container
## Run the "dev" script in package.json
#CMD ["npm", "run", "dev"]

FROM node:14.16.0-alpine3.10

WORKDIR /server
COPY package.json .
RUN npm install
COPY . .
CMD npm start