import express = require('express');
import path = require('path');
import cors = require('cors');

import 'express-async-errors';

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler'

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

app.listen(3333);



// Route = the whole command
// resource = user

// Method HTTP = GET, POST, PUT, DELETE
// Parameters

// GET = fetch an information (list, item)
// POST = create an info
// PUT = edit an info
// DELETE = delete an info

// Query Params: http:// localhost:3333/users?search=tony&page2
// Route Params: http:// localhost:3333/users/1 (identificar um recurso)
// Body: http:// localhost:3333/users (identificar um recurso)


// app.post('/users/:id', (request,response) => {
//     console.log(request.query);
//     console.log(request.params);
//     console.log(request.body);
//     return response.json ({message: 'Hello World'});
// })

// app.listen(3333);