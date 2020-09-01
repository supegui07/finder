# PRODUCTION DOCKERFILE
# ---------------------
# This Dockerfile allows to build a Docker image of the NestJS application
# and based on a NodeJS 12 image. The multi-stage mechanism allows to build
# the application in a "builder" stage and then create a lightweight production
# image containing the required dependencies and the JS build files.
#
# Dockerfile best practices
# https://docs.docker.com/develop/develop-images/dockerfile_best-practices/
# Dockerized NodeJS best practices
# https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md
# https://www.bretfisher.com/node-docker-good-defaults/
# http://goldbergyoni.com/checklist-best-practice-of-node-js-in-production/

FROM node:12-alpine as BASE
LABEL Santiago Upegui G. <santiago.upegui@cox2m.com>

WORKDIR "/app"

COPY package.json package-lock.json /app/
COPY config /app/
RUN npm install

# ---- Build ----
FROM BASE AS BUILD
COPY . /app/
RUN npm run build

# ---- Development ------
FROM BUILD AS DEVELOPMENT
EXPOSE 3000
CMD ["npm", "run", "start:debug"]

# ---- Release ----
FROM BASE AS RELEASE

# # copy production node_modules
# COPY --from=PRODUCTION_DEPENDECIES /usr/src/app/node_modules ./node_modules
# # copy app sources
# COPY --from=BUILD /usr/src/app/dist dist
# copy production node_modules
COPY --from=BASE --chown=node /app/node_modules /app/node_modules
RUN npm prune --production
# copy app sources
COPY --from=BUILD --chown=node /app/build /app/build

EXPOSE 3000
CMD ["node", "build/index.html"]
