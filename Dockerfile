FROM node:22-alpine3.19
RUN npm version
WORKDIR /app
#RUN npm init 
#RUN npm i express dotenv nodemon
COPY . .
CMD ['npm','run','dev']