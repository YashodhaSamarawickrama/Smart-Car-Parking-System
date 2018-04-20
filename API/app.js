const express = require('express');

const app = express();

const session = require('express-session');
//to protect routes from unauthorized access
const jwt = require('jsonwebtoken');

//Morgan is a logger middleware used for logging . It will log any request that comes to the server.
const morgan = require('morgan');

//to parse the body of the request using body-parser
const bodyParser = require('body-parser');

//mongoose is used to easily manipulate data
const mongoose = require('mongoose');

//Routes which should handle requests
const slotRoutes = require('./routes/slots/Slots');
const userRoutes = require('./routes/users/users');

//connecting to MongoDB
mongoose.connect('mongodb://localhost/parkSMART');

//overriding the mongoose global promise
mongoose.Promise = global.Promise;

//using morgan for logging
app.use(morgan('dev'));

//to parse URL encoded simple bodies
app.use(bodyParser.urlencoded({extended:false}));

//to parse json bodies
app.use(bodyParser.json());

//.use is used to make the middleware for the app variable. All the incoming requests will go through it
app.use('/api',slotRoutes);
app.use('/api',userRoutes);

//to use persistent user sessions
app.use(session({secret: 'ssshhhhh',resave:true,saveUninitialized:true}));

//for requests that dont go to any of the above routes
app.use((req,res,next) =>{
    const error = new Error("Not found");
    error.status= 404;
    //to forward the error and not the request
    next(error);
});

//The middleware to handle any error
app.use(function(err,req,res,next) {
    //console.log(err);
    res.status(422).send({error:err.message});
    });

module.exports = app;

