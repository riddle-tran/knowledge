1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.
   npx prisma db push

## Prerequisite

- Install make
- Install Docker version 20.10.23
- Install Docker Compose version v2.15.1

## Setup environments

- Clone `.env.template` as a new `.env` file and update the variables

## Start server for development

- Make dev

## Start server for production

- Make prod
