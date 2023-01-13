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
* The backend sever is running on [localhost:8080](http://localhost:8080/)
* The frontend server is running on [localhost:3000](http://localhost:3000/)
* You can test the backend api using the following postman collection (check also `server/README.md` file):

   [![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/21859861-cfc6ce93-e027-49d5-b552-3f127a9327b6?action=collection%2Ffork&collection-url=entityId%3D21859861-cfc6ce93-e027-49d5-b552-3f127a9327b6%26entityType%3Dcollection%26workspaceId%3Dbce19438-0387-4f5e-bd8d-c16bcaf50e5a#?env%5Bdelivery-app%5D=W3sia2V5IjoiYmFzZV91cmwiLCJ2YWx1ZSI6ImxvY2FsaG9zdDo4MDgwIiwiZW5hYmxlZCI6dHJ1ZX1d)

* To stop the mongo db container go into the infra folder and run:
   ```
   docker-compose -f mongodb.yml down
   ```