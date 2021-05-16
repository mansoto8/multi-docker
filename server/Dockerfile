FROM node:14.14.0-alpine
WORKDIR "/home/node/app"
COPY ./package.json /home/node/app/package.json
RUN npm install
COPY ./index.js /home/node/app/index.js
COPY ./keys.js /home/node/app/keys.js
CMD ["npm", "run", "start"]