# 1. Строим React-приложение
FROM node:18-alpine AS build
LABEL maintainer="gnatykdm"

WORKDIR /react-docker-example/

COPY package.json package-lock.json ./
RUN npm install

COPY public/ ./public
COPY src/ ./src

RUN npm run build

FROM nginx:alpine

RUN apk add --no-cache certbot certbot-nginx openssl

COPY --from=build /react-docker-example/build /usr/share/nginx/html

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
