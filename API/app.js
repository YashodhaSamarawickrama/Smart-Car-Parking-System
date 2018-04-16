const express = require('express');

const app = express();

//Morgan is another HTTP request logger middleware used for logging . It will log any request that comes to the server.

const morgan = require('morgan');

//to parse the body of the request using body-parser

const bodyParser = require('body-parser');

//mongoose is used to easily manipulate data

const mongoose = require('mongoose');


//Routes which should handle requests

const slotRoutes = require('./routes/slots/Slots');
const userRoutes = require('./routes/users/users');

//connecting to the cluster on MongoDB Atlas

mongoose.connect('mongodb+srv://admin:'+ process.env.MONGO_ATLAS_PW +'@parksmart1-7f1ua.mongodb.net/test',{
    useMongoClient:true
});




app.use(morgan('dev'));

//to parse URL encoded simple bodies

app.use(bodyParser.urlencoded({extended:false}));

//to parse json bodies

app.use(bodyParser.json());

/*//Handling Cross Origin Resource Sharing (CORS)

app.use((req,res,next)=>{

    //to allow from any origin

    res.header('Access-Control-Allow-Origin','*');

    //to allow any type of error
    res.header('Aceess-Control-Allow-Headers','Origin,X-Requested-With,Content-Type,Accept,Authorization');

    if(req.method === 'options'){

    }

})*/
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

