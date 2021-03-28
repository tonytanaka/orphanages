**Backend**

- create a backend folder: mkdir backend
- cd backend
- code .
- npm init -y
  - creates a package.json file
- npm install express (framework node which helps us to deal with Requests & Responses, creating the routes)
  - it creates a dependency at the package.json for express
- created a src folder
- created a server.ts file into this folder
- npm install @types/express -D (warning to install a type package as development dependency)
  - with this, code will understand and suggest the methods
- node src/server.js (to test the application)
  - won't work because it needs typescript to be installed
- npm install typescript -D
  - it will create a devDependency at package.json
- npm init typescript
  - it will create a tsconfig.json file
  - need to change target="es5" to "es2017" to convert less things to the code and make it mode readable
- npm install ts-node-dev -D
  - so we can run the project using typescript and node
  - it creates a devDependency at package.json
- create a "script" command at package-json, in order to run customized scripts:
  - "dev": "ts-node-dev src/server/js"
  - "dev": "ts-node-dev -- transpile-only --ignore-watch node_modules src/server.ts"
- _npm run dev_ to start application
- used INSOMNIA to test HTTP methods, mainly POST methods that are not supported by browsers
- **import express = require('express');** ==> put this line into server.ts
- _npm install typeorm sqlite3_ (typeorm is a tool/library to allow node access the database)
  - set database using ORM (library) and DB sqlite3 (creates a DB inside the app)

// 3 ways to deal with databases in a Web Application:
// Driver nativo: sqlite3.query('SELECT _ FROM users')
// Query builder (knexJs): knex('users).select('_').where('name', 'Tony')
// ORM: each table from DB is a JS class; each select from db is an instace, an object from that class
// ORM is the higher level of abstraction
// object relational mapping

- create folder database into src folder
- create file database.sqlite into database folder
- create ormconfig.json into src folder in backend root
  - this is to make connection with DB possible
- create connection.ts into database folder

- create a folder migrations, inside database:

  - it is like a version control of DB changes
  - it syncronizes these changes among all users
  - migration files specify procedures to make any changes in a table, add a column, create table etc
  - typeorm provide a "cli" (interface with command lines) with all commands

- include "typeorm": "ts-node-dev ./node_modules/typeorm/cli.js" in scripts, package.json
  - this is to inform typeorm that we are working with Typescript
- include in ormconfig.json where is the migrations folder
  "migrations": ["./src/database/migrations/*.ts"],
  "cli": {"migrationsDir": "./src/database/migrations"}
  and this cli one is where to create new migrations

- **typeorm migration:create -n create_orphanages**

  - creates the migration with the commands to create a table, with up and down methods
    - up method will perform the changes in the DB
    - down method will undo what was done in the up method

- npm run typeorm migration:run
- npm run typeorm migration:revert (in case we need to delete the table)

// MVC standard model
// Model: a representation of a database table, an entity (orphanages, usw)
// Views: how data is shown in our frontend
// Controllers: is the logic of the routes

- create a folder models in src
- create a Orphanage.ts
  - this is a JS class that will support each orphanage
  - it has to be integrated with typeorm
  - each database table will have a representation which we will call model
  - each model is a JS class
- change tsconfig.json:
  - "strictPropertyInitialization": false,
- change ormconfig.json:
  "entities":["./src/models/*.ts"],
- create a routes folder into src
  - create a routes.ts file
  - move app to routes.js
- ## create a controllers folder into src

- installed GLOBALLY: **npm install typeorm -g**
- **typeorm migration:create -n create_images**
  - create a new migration to this create this table
- **npm run typeorm migration:run**

  - create the table in DB

- **npm install multer**
  - program to handle images
- create a folder config into src
- create a file upload.ts into config

  - npm install @types/multer -D

- create views folder
- show a friendly error message for the user who consumes the API
- **npm i express-async-errors**
- validation method
- **npm i yup**
- **npm i @types/yup -D**
- allow application be accessed from different domines
  - for ex.: frontend is is localhost:3000 and backend in localhost:3333
- **npm i cors**
- **npm i @types/cors -D**
