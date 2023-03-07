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

#### Migrations
````
npm run typeorm -- -d src/database/dataSource.ts migration:generate src/database/migration/<name>,
```