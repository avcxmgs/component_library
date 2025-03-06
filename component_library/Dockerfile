FROM node:18-alpine

WORKDIR /santos_margareth_ui_garden

COPY package.json .

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 8083

CMD ["npm", "run", "dev","--","--host","0.0.0.0"]