# pull the official base image
FROM node:alpine AS build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install application dependencies
COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./

# add app
RUN npm i
COPY . ./

# start app
CMD ["npm", "run", "start"]