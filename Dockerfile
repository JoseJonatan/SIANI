FROM node:14

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

# Create app directory
WORKDIR /home/node/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

USER node

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY --chown=node:node . .

EXPOSE 8005
ARG profile=local
RUN echo "Profile arg: $profile"
ENV env_profile=$profile
RUN echo "Env_Profile arg: $env_profile"
ENTRYPOINT npm run $env_profile