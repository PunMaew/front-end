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

FROM nginx as production-stage
RUN mkdir /app
COPY --from=builder /app .
COPY ./nginx.conf /etc/nginx/nginx.conf
CMD ["nginx", "-g", "daemon off;"]

# FROM node:16.6.1-alpine

# WORKDIR /app

# COPY --from=builder /app  .

# ENV HOST 0.0.0.0

# #EXPOSE 443

# CMD [ "npm", "start" ]