FROM node:alpine
WORKDIR /app
#package.json
COPY package.json ./
RUN npm install
#index
COPY index.js ./
#pm2
COPY pm2.json ./
#public
COPY public ./public
#start
EXPOSE 8080
RUN npm install pm2 -g
CMD ["pm2-runtime", "pm2.json"]