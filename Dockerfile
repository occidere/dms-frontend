FROM node:5.12.0
WORKDIR ./docker
ADD . ./docker/
RUN npm install
RUN npm install -g cordova ionic
EXPOSE 8100
CMD ["ionic", "serve"]