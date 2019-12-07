# About

This is but a proof of concept of how to run using prisma as a DB layer managing a PostgreSQL database hosted in GCP (could also be a local `psql` database ran in the same docker container), then using another prisma server as another layer to add more customized resolvers, such as web sockets.

Note: This is a project that was abandoned just after the setup in favour of `graphene-python`, which is why there are a few files with commented code and poor readability.

## Install
  1. Install and run the Vagrant machine.
  2. Start your Prisma server: docker-compose up -d
  3. Deploy your Prisma service: prisma deploy
  4. Read more about introspection:
     http://bit.ly/prisma-introspection

Troubleshooting: https://www.prisma.io/docs/reference/prisma-servers-and-dbs/database-connectors/postgres-neix6nesie

## When in Vagrant

```
docker info
sudo curl -L https://github.com/docker/compose/releases/download/1.25.1-rc1/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose
```

## Installing NPM and Node.js in Vagrant

Setup NPM and Node.js in Vagrant: https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/
