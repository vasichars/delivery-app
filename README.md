# delivery-app

A simple delivery app which allows guest clients to browse items and submit orders.


## Installation

> **Prerequisites**
> 
> * You'll need [Node](https://nodejs.org/en/) version 18.x to be installed.
> * You'll need a running instance of [mongoDB](https://www.mongodb.com/) or alternatively [docker](https://docs.docker.com/get-docker/) and [docker-compose](https://docs.docker.com/compose/install/) to be installed
> * You'll need the following local ports to be available:
>    * 27017 (mognodb)
>    * 8080 (node server)
>    * 3000 (next client)

1. Clone the repo and go into the delivery-app folder
   ```
   git clone git@github.com:vasichars/delivery-app.git

   cd delivery-app
   ```
2. Start the db
   ```
   cd infra

   docker-compose -f mongodb.yml up -d
   ```
3. Install server dependencies
   ```
   cd ../server

   npm istall
   ```
4. Run mongo migrations (run also for the test db using NODE_ENV=test)
   ```
   npm run migration
   ```
   ```
   NODE_ENV=test npm run migration
   ```
5. Start the server
   ```
   npm start
   ```
6. Install client dependencies
   ```
   cd ../client

   npm install
   ```
7. Run the client using dev mode (or build and then start)
   ```
   npm run dev
   ```
   or
   ```
   npm run build

   npm start
   ```


## Tips
To stop the mongo db container go into the infra folder and run:
```
docker-compose -f mongodb.yml down
```