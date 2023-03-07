# Node Express Docker File

From node:10.16-alpine

# Create app dir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install Deps
COPY package*.json ./

RUN npm install --silent

# Copy to app 
COPY . .

# Exports
EXPOSE 5000

CMD ["npm", "start"]
