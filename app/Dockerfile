FROM node:10-alpine

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

RUN npm i -g @angular/cli
RUN npm install

EXPOSE 4200/tcp

CMD ng serve --host 0.0.0.0 --disableHostCheck true
