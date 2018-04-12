const express = require('express');

const app = express();

//Morgan is another HTTP request logger middleware used for logging . It will log any request that comes to the server.

const morgan = require('morgan');


//Routes which should handle requests

const slotRoutes = require('./routes/slots/Slots');
const userRoutes = require('./routes/users/users');

app.use(morgan('dev'));


//.use is used to make the middleware for the app variable. All the incoming requests will go through it

app.use('/Slots',slotRoutes);
app.use('/users',userRoutes);

//for requests that dont go to any of the above routes

app.use((req,res,next) =>{
    const error = new Error("Not found");
    error.status= 404;
    //to forward the error and not the request
    next(error);
});

//If a DB operation fails

app.use((error,req,res,next) => {
    res.status(err.status || 500);
    res.json({
        error:{
            message:error.message

        }
    })
});

module.exports = app;

