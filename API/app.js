const express = require('express');

const app = express();

//Morgan is another HTTP request logger middleware used for logging . It will log any request that comes to the server.

const morgan = require('morgan');


//Routes which should handle requests

const slotRoutes = require('./routes/slots/Slots');
const userRoutes = require('./routes/users/users');


//var db = require('./db');

//var UserController = require('./user/UserController');

//.use is used to make the middleware for the app variable. All the incoming requests will go through it

app.use('/Slots',slotRoutes);
app.use('/users',userRoutes);


module.exports = app;

