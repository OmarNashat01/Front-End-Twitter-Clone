# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY my-app ./

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm run build

EXPOSE 3000

CMD ["npm" , "start"]
