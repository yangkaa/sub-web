# ---- Dependencies ----
FROM node:16-alpine AS build
WORKDIR /app
COPY . .
RUN yarn install && yarn build

FROM nginx:1.16-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD [ "nginx", "-g", "daemon off;" ]
