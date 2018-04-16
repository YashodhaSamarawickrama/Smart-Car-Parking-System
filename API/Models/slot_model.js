const mongoose = require('mongoose');

//how a slot should look like in the database

const slotSchema = mongoose.Schema({

    _id:mongoose.Types.ObjectId,
    Category:String,
    Status:String
});

module.exports = mongoose.model('Slot',slotSchema);
