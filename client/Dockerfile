# Pull Docker Hub base image
#FROM node:14.16.0-alpine3.10
# Set working directory
#WORKDIR /usr/app
# Install app dependencies
#COPY package*.json ./
#RUN npm install -qy
# Copy app to container
#COPY . .
# Run the "dev" script in package.json
#CMD ["npm", "run", "dev"] 


FROM node:14.16.0-alpine3.10 as build-stage 

WORKDIR /client
COPY package.json .
COPY . .
RUN npm install --force


RUN npm run build

# Stage 2
FROM nginx:1.17.0-alpine

COPY --from=build-stage /client/build /usr/share/nginx/html
EXPOSE $REACT_DOCKER_PORT

CMD nginx -g 'daemon off;'
