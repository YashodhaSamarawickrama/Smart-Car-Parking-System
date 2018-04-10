const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = require('./app');

const port = process.env.PORT || 3000;



app.listen(port,()=>{
    console.log("Server is up and running on http://www.localhost: "+port);

});

