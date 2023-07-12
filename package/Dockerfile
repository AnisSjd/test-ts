FROM node:18-alpine

ARG SERVICE_NAME

WORKDIR /usr/src/app/lib
COPY ./lib .
RUN npm install
RUN npm run build

WORKDIR /usr/src/app/package
COPY ./package .
RUN npm install
RUN npm run build

WORKDIR /usr/src/app/main
COPY ./${SERVICE_NAME}/package.json .
RUN npm install
COPY ./${SERVICE_NAME} .

WORKDIR /usr/src/app/main
CMD npm run start
