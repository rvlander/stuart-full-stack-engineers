# Couriers Capacity API

This is a microservice aimed at handling capacity properties of couriers in the Stuart micro-service architecture.
It will be mainly used by Stuart API and Dispatcher.

## Getting start

### Requirements

[https://github.com/nvm-sh/nvm](nvm) must be installed and available in PATH.
[https://www.docker.com/](DOcker) must be installed and docker service must be launched.

### Installation

First, clone this repo and `cd` to it.

Then, Install and switch to correct node environment:

```
nvm install
nvm use
```

### Setup database

Launch the database and launch migrations

```
npm db:run
npm db:runMigrations
```

#### Running

```
npm run start
```

Live reload (the first time it is launched, you may get an error, just reload the command)

```
npm run dev
```

In the later case you can access documentation there : [http://localhost:3000/docs](localhost:3000/docs).

#### Testing

Running tests

```
npm run test
```

Or watching tests (if you want to develop the API using tests)

```
npm run test:watch
```

#### Creating a new migration

Be careful :

- typeORM make the difference between current entities declared in code and the current state the database as access throught `src/database/dataSource.ts`.
- Be sure that all previous migrations are already run before launching a new one.
- In all cases read the generated migration carefully
- If you need to manually modify the migration, be sure that you can't achieve the same result using TypeORM decorators.

In order to automagically create a migration

```
npm run typeorm -- -d src/database/dataSource.ts migration:generate src/database/migration/<name>
```
