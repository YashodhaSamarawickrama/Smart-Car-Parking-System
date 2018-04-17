const express = require('express');

//importing  mongoose
const mongoose = require('mongoose');

//To register different routes
const router = express.Router();

//to import slot model
const slot = require('../../Models/slot_model.js');


//when a GET request comes for all available slots (to return all slots)
router.get('/slots',function(req,res,next){

    res.send({
        type:'GET'});
});

//when a POST request comes for a new slot(adding a new slot)
router.post('/slots',function(req,res,next){

    //intializing a news slot object and saving to database
    slot.create(req.body).then(function (Slot) {
        res.send(Slot);
    }).catch(next);

});

//when a PUT request comes for a specific  slot during car entry or exit

router.put('/slots/:id',function(req,res,next){

    res.send({type:'PUT'});
});

//when a DELETE  request comes for a slot

router.delete('/slots/:id',function(req,res,next){

    res.send({type:'DELETE'});
});







/*
//when a POST request comes for a slot
router.post('/slots',(req,res,next)=>{

    //creating an instance of the slot model using the schema as a constructor
    const slot = new Slot({
        _id:new mongoose.Types.ObjectId(),
        category:req.body.category,
        status:req.body.status
    });

    //asking mongoose to store the above created object in the database
    slot.save(function (err,success) {
        if (err)
            res.send(err);
        res.json(success);
    })
        .then(result => {
            console.log(result);
        })
        .catch(err => console.log(err));



    res.status(200).json({
        message:'Handling POST requests to /Slots'
    });
});

//when a GET request comes to a specific slot
router.get('/:slotId',(req,res,next) => {

    const id = req.params.slotId ;
    /!*if(status of slot id is available return available )
    else return not available
     *!/

    /!*have to get the status of the slot and if the status is available , return available"*!/
});

//when a POST request comes to a specific slot(Car entry)
router.post('/:slotId',(req,res,next) => {

    const id = req.params.slotId ;
    //set the status of the slot to not available

});

//when a POST request comes to a specific slot(Car exit)
router.patch('/:slotId',(req,res,next) => {

    const id = req.params.slotId ;

    //update the status of the slot to available

});

//To delete a slot in any case
router.delete('/:slotId',(req,res,next) => {

    const id = req.params.slotId ;

    res.status(200).json({
        message:'Slot deleted '
    });

});
*/


module.exports = router;





