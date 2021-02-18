// import express from 'express';
import express = require('express');
import './database/connection';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

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