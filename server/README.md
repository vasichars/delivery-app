# delivery-app-server
A simple delivery app that allows guest users to browse items and submit orders.

## Contents
* [Installation](#installation)
* [Run](#run)
* [Postman](#postman)
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

### Postman
While running the server:
1. Fork the following postman collection into you workspace.
2. Select the delivery-app environment from the right up corner.
3. Test the implemented requests!


[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/21859861-cfc6ce93-e027-49d5-b552-3f127a9327b6?action=collection%2Ffork&collection-url=entityId%3D21859861-cfc6ce93-e027-49d5-b552-3f127a9327b6%26entityType%3Dcollection%26workspaceId%3Dbce19438-0387-4f5e-bd8d-c16bcaf50e5a#?env%5Bdelivery-app%5D=W3sia2V5IjoiYmFzZV91cmwiLCJ2YWx1ZSI6ImxvY2FsaG9zdDo4MDgwIiwiZW5hYmxlZCI6dHJ1ZX1d)

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


