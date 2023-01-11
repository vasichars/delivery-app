# delivery-app-server
A simple delivery app that allows guest users to browse items and submit orders.

## Contents
* [Installation](#installation)
* [Run](#run)
* [Tests](#tests)
* [Linter](#linter)
* [Migrations](#migrations)

---


### Installation

> **Prerequisites**
> 
> * You'll need Node version 18.x to be installed.
> * You'll also need a running instance of mongoDB.

Install dependencies: `npm install`

### Run

Start the server: `npm start`

### Tests

Run tests: `npm test`  
Run tests with coverage: `npm run test:coverage`

### Linter

Check linter errors/warnings: `npm run lint`  
Fix linter errors: `npm run lint:fix`  

### Migrations

* Create new migration: `npm run migration:create -- MigrationName`
* Run migration: `npm run migration`
* Revert migration: `npm run migration:revert`
* Check migrtation status: `npm run migration:status`
