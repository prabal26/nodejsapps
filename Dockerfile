FROM 22-alpine3.19
RUN npm init && npm i express dotenv nodemon
COPY . .
CMD ['npm','run','dev']