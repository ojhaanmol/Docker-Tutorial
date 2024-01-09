FROM node:14.21.3

WORKDIR /application

COPY ./application/ /application/

RUN npm install

EXPOSE 3000

CMD [ "node" , "index" ]