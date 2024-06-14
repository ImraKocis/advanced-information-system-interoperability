## Installation

```bash
$ yarn install
```

## Running the app

Create `.env` in root:

```dotenv
DATABASE_URL="postgresql://postgres:secure-password@localhost:5434/secure-coding?schema=public"
AT_SECRET="secret"
RT_SECRET="rt-secret"
```

Run database:

```bash
docker compose up -d sc-db
```

Generate db schema from prisma:

```bash 
prisma migrate dev --name init

## apply migrations
yarn db:dev:restart
```

Apply migrations new migrations:

```bash
prisma migrate dev --name <migration-name>

## reset docker container and apply new migrations
yarn db:dev:restart
```

Run prisma studio (optional)

```bash
npx prisma studio
```
Run app

```bash
# development mode
yarn start:dev

# production mode
yarn start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```
