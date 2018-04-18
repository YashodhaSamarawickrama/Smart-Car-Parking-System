const express = require('express');

//to hash the passwords
const bcrypt = require('bcrypt');

//importing  mongoose
const mongoose = require('mongoose');

//To register different routes
const router = express.Router();

//to import user model
const user = require('../../Models/user_model.js');

//when a new user signups
router.post('/users',function(req,res,next){

    //intializing a new slot object and saving to database
    user.create(req.body).then(function (User) {
        res.send(User);
    }).catch(next);

});















module.exports = router;

