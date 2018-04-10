var mongoose = require('mongoose');
//mongoose is used to interact with the Mongo Database
//table to store the status of parking slots
var SlotSchema = new mongoose.Schema({
     SlotID: Integer,
    Availability : String,


});
mongoose.model('Slot', UserSchema);

module.exports = mongoose.model('Slot');