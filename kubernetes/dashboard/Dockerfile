FROM node:lts AS build

RUN apt-get update \
  && apt-get install -y build-essential

WORKDIR /data

COPY ./package.json /data/
RUN npm install

COPY ./home2.html /data/
COPY ./graphs2.html /data/
COPY ./scriptHome2.js /data/
COPY ./scriptGraphs2.js /data/
COPY ./server.js /data/
COPY ./output.css /data/
COPY ./style.css /data/

FROM node:lts-slim

RUN apt-get update

RUN mkdir -p /data

COPY --from=build /data /data

WORKDIR /data

ENV PORT=1880
ENV NODE_ENV=production
ENV NODE_PATH=/data/node_modules

EXPOSE 1880

CMD ["node", "server.js"]