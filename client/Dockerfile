FROM node:alpine as builder
WORKDIR '/home/node/app'
COPY './package.json' /home/node/app/package.json
RUN npm install
COPY ./public /home/node/app/public
COPY ./src /home/node/app/src
COPY ./yarn.lock /home/node/app/yarn.lock
RUN npm run build

FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /home/node/app/build /usr/share/nginx/html
CMD ["npm", "run", "start"]