FROM node:16.10.0 as build-stage

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "npm","run","build" ]

FROM nginx as production-stage

RUN mkdir /app

COPY --from=build-stage /app/dist /app

COPY ./nginx.conf /etc/nginx/nginx.conf

CMD ["nginx", "-g", "daemon off;"]