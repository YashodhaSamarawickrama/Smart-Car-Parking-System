const mongoose = require('mongoose');

//how a slot should look like in the database
const Schema = mongoose.Schema;

const slotSchema = new Schema({
    Reserved:{
        type:Boolean,
        required:[true,"Reserved field is required"]
    },
    Available:{
        type:Boolean,
        //if a slot is not marked as full, it will be considered as available
        default:true

    }



});

module.exports = mongoose.model('Slot',slotSchema);
