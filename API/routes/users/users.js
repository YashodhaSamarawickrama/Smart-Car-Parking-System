const express = require('express');

//to hash the passwords using bcryptjs
const bcrypt= require('bcryptjs');

//importing  mongoose
const mongoose = require('mongoose');

//To register different routes
const router = express.Router();

//to import user model
const User = require('../../Models/user_model.js');

//const saltRounds = 10;

router.post('/login',function (req,res) {

    const Email = req.body.Email;
    const Password = req.body.Password;

    User.findOne({Email:Email,Password:Password},function (err,user) {
        if(err){
            console.log(err);
            return res.status(500).send();

        }
        if(!user){
            res.status(404).send({
                message: "User not found"
            });
        }

        return res.status(200).send({
            message:"Welcome user"
        });
    })


});


//when a new user signup request comes
router.post('/signup',function(req,res){

    //extracting the user details
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Email = req.body.Email;
    const Password = req.body.Password;

    //creating a new user model instance
    const newuser = new User();
    newuser.FirstName = FirstName;
    newuser.LastName = LastName;
    newuser.Email = Email;
    newuser.Password = Password;
    newuser.save(function(err,savedUser) {
        if(err){
            console.log(err);
            return res.status(500).send();
        }

        res.status(200).send({
            message: "User created"
        });
    })
})

    /*
        //checking if the email already exists
        user.find({Email:req.body.Email})
            .exec()
            .then(newuser => {
                if(newuser.length >= 1){
                    //409 means conflict
                    return res.status(409).json({
                        message:"Email already exists"
                    });
                } else{
                    //salting is added to protect the password from unhashing easily
                    //bcrypt.hash(req.body.password,10,(err,hash) => {
                       /!* if(err){
                            return res.status(500).json({
                                error:err
                            });
                        else{*!/
                            const newuser = new user({
                                Email:req.body.Email,
                                Password:req.body.Password

                            });

                            newuser.save()

                            /!*user.create({
                                Email:req.body.Email,
                                Password:hash
                            }*!/.then(result => {

                                console.log(result);
                                res.status(201).json({
                                    message: "User created"
                                });

                            })
                                .catch(err => {
                                    console.log(err);
                                    res.status(500).json({
                                        error:err
                                    });
                                })


                    })
                }

            })



    });
    }

    */

module.exports = router;


