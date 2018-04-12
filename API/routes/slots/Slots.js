const express = require('express');

//To register different routes

const router = express.Router();

//when a GET request comes for a slot(User requests for availability)

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

//when a POST request comes to a specific slot(Car entry or exit)

router.post('/:slotId',(req,res,next) => {

    const id = req.params.slotId ;


})

module.exports = router;