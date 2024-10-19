FROM node:18-alpine
LABEL autor="gnatykdm"

WORKDIR /react-docker-example/

COPY public/ /react-docker-example/public
COPY src/ /react-docker-example/src
COPY package.json /react-docker-example/

EXPOSE 3000

RUN npm install
CMD [ "npm", "start" ]