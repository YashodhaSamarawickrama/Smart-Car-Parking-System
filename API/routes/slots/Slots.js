const express = require('express');

//To register different routes

const router = express.Router();

//when a GET request comes for a slot

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handling GET requests to /Slots'
    });
});

//when a POST request comes for a slot

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handling POST requests to /Slots'
    });
});

//when a GET request comes to a specific slot

router.get('/:slotId',(req,res,next) => {
    const id = req.params.slotId ;


})

//var mongoose = require('mongoose');
//mongoose is used to interact with the Mongo Database
//table to store the status of parking slots
/*var SlotSchema = new mongoose.Schema({
     SlotID: Integer,
    Availability : String,


});
mongoose.model('Slot', UserSchema);*/
module.exports = router;