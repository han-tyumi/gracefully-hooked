FROM node:14.16.0

WORKDIR /app

USER node

EXPOSE 3000

ENTRYPOINT [ "yarn" ]
CMD [ "dev" ]
