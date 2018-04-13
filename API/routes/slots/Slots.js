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
    /*if(status of slot id is available return available )
    else return not available
     */

    /*have to get the status of the slot and if the status is available , return available"*/
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


module.exports = router;





