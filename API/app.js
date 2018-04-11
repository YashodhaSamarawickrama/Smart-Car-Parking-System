const express = require('express');

const app = express();

//var db = require('./db');

//var UserController = require('./user/UserController');

//.use is used to make the middleware for the app variable. All the incoming requests will go through it

app.use((req,res,next)=>{
    res.status(200).json({
        message:"The code works"
    })
});

module.exports = app;