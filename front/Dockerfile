FROM node:18-alpine3.19

WORKDIR /app

COPY . .

RUN npm cache clean --force
RUN npm i


CMD ["npm", "run" ,"dev"]