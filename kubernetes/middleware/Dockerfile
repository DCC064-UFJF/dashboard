FROM node:lts AS build

RUN apt-get update \
  && apt-get install -y build-essential

WORKDIR /data

COPY ./package.json /data/
RUN npm install

COPY ./server2.js /data/

FROM node:lts-slim

RUN apt-get update

RUN mkdir -p /data

COPY --from=build /data /data

WORKDIR /data

ENV PORT=5001
ENV NODE_ENV=production
ENV NODE_PATH=/data/node_modules

EXPOSE 5001

CMD ["node", "server2.js"]