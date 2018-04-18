const express = require('express');

//to hash the passwords using bcryptjs
const bcryptjs = require('bcryptjs');

//importing  mongoose
const mongoose = require('mongoose');

//To register different routes
const router = express.Router();

//to import user model
const user = require('../../Models/user_model.js');

const saltRounds = 10;
//when a new user signups
router.post('/users',function(req,res,next){

    //checking if the email already exists
    user.find({email:req.body.email})
        .then(function (user) {
            if(user.length >= 1){
                //409 means conflict
                return res.status(409).json({
                    message:"Email already exists"
                });
            }else{
                //salting is added to protect the password from unhashing easily

                bcryptjs.hash(req.body.password,saltRounds,function(err,hash){
                    if(err){
                        return res.status(500).json({

                            error:err
                        });
                    }else{


                    }
                })
            }

        })


    //intializing a new slot object and saving to database
    user.create({
        Email:req.body.Email,
        Password:
    }).then(function (User) {
        res.send(User);
    }).catch(next);

});















module.exports = router;

