const http = require('http');
//const express = require('express');
//const bodyParser = require('body-parser');
//const path = require('path');
//const cookieParser = require('cookie-parser');
/*const exphbs = require('express-handlebars');
const expressValidator = require('express-validator');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;*/
//const mongo = require('mongodb');
//const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/parkSMART');
//const db = mongoose.connection;
const app = require('./app');
const port = process.env.PORT || 3000;

//setting the socket to listen
app.listen(port,()=>{
    console.log("Server is up and running on http://www.localhost: "+port);

});

