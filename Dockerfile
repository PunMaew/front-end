FROM node:16.6.1-alpine as builder
# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# update and install dependency
RUN apk update && apk upgrade
RUN apk add git

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm install

# build necessary, even if no static files are needed,
# since it builds the server as well
RUN npm run build

# expose 5000 on container
EXPOSE 8080

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=8080

# start the app
CMD [ "npm", "start" ]

# WORKDIR /app

# COPY . .

# RUN npm install \
#   --prefer-offline \
#   --frozen-lockfile \
#   --non-interactive \
#   --production=false

# RUN npm i @nuxtjs/style-resources

# RUN npm run build

# RUN rm -rf node_modules && \
#   NODE_ENV=production npm install \
#   --prefer-offline \
#   --pure-lockfile \
#   --non-interactive 

# # FROM nginx as production-stage
# # RUN mkdir /app
# # COPY --from=builder /app /app
# # COPY ./nginx.conf /etc/nginx/nginx.conf
# # CMD ["nginx", "-g", "daemon off;"]

# FROM node:16.6.1-alpine

# WORKDIR /app

# COPY --from=builder /app  .

# ENV HOST 0.0.0.0

# EXPOSE 8080

# CMD [ "npm", "start" ]