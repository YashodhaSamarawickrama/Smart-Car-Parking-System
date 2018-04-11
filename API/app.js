const express = require('express');

const app = express();

const slotRoutes = require('./routes/slots/Slots');

//var db = require('./db');

//var UserController = require('./user/UserController');

//.use is used to make the middleware for the app variable. All the incoming requests will go through it

app.use('/Slots',slotRoutes);

module.exports = app;