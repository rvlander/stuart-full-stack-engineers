# Couriers Capacity API

## Getting start

### Requirements

[https://github.com/nvm-sh/nvm](nvm) must be installed and available in PATH.

### Installation

Install and switch to correct node environment:
```
nvm install
nvm use
```

### Developement

Launch the database
```
npm db:run
```

### Running
```
npm run start
```

Live reload
```
npm run start:watch
```

### Testing
Running test
```
npm run test
```

Or watching test
```
npm run test:watch
```


#### Migrations
````
npm run typeorm -- -d src/database/dataSource.ts migration:generate src/database/migration/<name>,
```