const express = require('express');
const user = require('../users/users.js');
const session = require('express-session');
//importing  mongoose
const mongoose = require('mongoose');

//To register different routes
const router = express.Router();

//to import slot model
const slot = require('../../Models/slot_model.js');

var sess;
//when a GET request comes for all available slots (to return all slots)
router.get('/slots',function(req,res,next){

    //sess=req.session;

    /*if(!sess.Email){
        res.status(401).send({
            message: "Please login to continue"
        });
    }
    else {*/
        slot.find({"Available": "true"}).then(function (Slot) {
            res.send(Slot);
        })

});

//when a POST request comes for a new slot(adding a new slot)
router.post('/slots',function(req,res,next){

    //intializing a new slot object and saving to database
    slot.create(req.body).then(function (Slot) {
        res.send(Slot);
    }).catch(next);

});

//when a PUT request comes for a specific  slot during car entry

router.put('/slots/:id',function(req,res,next){

    slot.findByIdAndUpdate({_id:req.params.id},req.body).then(function() {
        slot.findOne({_id: req.params.id}).then(function (slot) {
            res.send(slot);
        });

    });
});

//when a PUT request comes for a specific  slot during car exit

router.put('/slots/:id',function(req,res,next){
    slot.findByIdAndUpdate({_id:req.params.id});
    res.send({type:'PUT'});
});

//when a DELETE  request comes for a slot

router.delete('/slots/:id',function(req,res,next){
    //extracting the slot ID from route parameter

    slot.findByIdAndRemove({_id:req.params.id}).then(function (Slot) {
        res.send(Slot);
    });
});
module.exports = router;





