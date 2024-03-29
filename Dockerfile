FROM node:16.6.1-alpine as builder

WORKDIR /app

COPY . .

RUN npm install \
  --prefer-offline \
  --frozen-lockfile \
  --non-interactive \
  --production=false

RUN npm i @nuxtjs/style-resources

RUN npm run build

RUN rm -rf node_modules && \
  NODE_ENV=production npm install \
  --prefer-offline \
  --pure-lockfile \
  --non-interactive 

FROM node:16.6.1-alpine

WORKDIR /app

COPY --from=builder /app  .

ENV HOST 0.0.0.0

EXPOSE 8080

CMD [ "npm", "start" ]