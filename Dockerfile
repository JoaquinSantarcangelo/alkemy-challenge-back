FROM node:15

WORKDIR /app

COPY . .

RUN npm install

COPY ormconfig.docker.json ./ormconfig.son

CMD ["npm", "start"]