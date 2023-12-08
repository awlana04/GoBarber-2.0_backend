FROM node:19.5.0-alpine

WORKDIR /usr/app

COPY package*.json ./
COPY prisma ./prisma/
COPY .env ./
COPY tsconfig.json ./

RUN npm install
RUN npx prisma generate

COPY . .

EXPOSE 3333

CMD npm run app
