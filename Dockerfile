FROM node:16.13.1
WORKDIR /app
COPY . .
ENTRYPOINT ["npm", "start"]