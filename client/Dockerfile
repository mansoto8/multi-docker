FROM node:alpine as builder
WORKDIR '/home/node/app'
COPY './package.json' ./package.json
RUN npm install
COPY ./public ./public
COPY ./src ./src
COPY ./yarn.lock ./yarn.lock
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
CMD ["npm", "run", "start"]