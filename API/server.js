const http = require('http');

const express = require('express');

const app = require('./app');

const port = process.env.PORT || 4000 ;
//setting the socket to listen
app.listen(port,()=>{
    console.log("Server is up and running on http://www.localhost: "+port);

});

