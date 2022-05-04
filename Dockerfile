# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

COPY my-app ./

RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent
RUN npm run build



# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /var/www/html
# new
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
# COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
