ARG VARIANT=12
FROM mcr.microsoft.com/vscode/devcontainers/javascript-node:0-${VARIANT}

# Update args in docker-compose.yaml to set the UID/GID of the "node" user.
ARG USER_UID=1000
ARG USER_GID=$USER_UID
RUN if [ "$USER_GID" != "1000" ] || [ "$USER_UID" != "1000" ]; then groupmod --gid $USER_GID node && usermod --uid $USER_UID --gid $USER_GID node; fi

WORKDIR /workspace

COPY package.json . 
RUN npm install -g sequelize-cli
RUN npm install --quiet

RUN npm install nodemon -g --quiet

COPY . . 

EXPOSE 9000

CMD npm start
CMD sequelize db:migrate