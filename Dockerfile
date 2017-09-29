FROM node

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY bower.json .
# For npm@5 or later, copy package-lock.json as well
# COPY package.json package-lock.json ./

RUN npm install
RUN echo '{ "allow_root": true }' > /root/.bowerrc
RUN npm run bowerinstall


# Bundle app source
COPY . .
RUN npm run build


EXPOSE 8080
CMD [ "npm", "start" ]