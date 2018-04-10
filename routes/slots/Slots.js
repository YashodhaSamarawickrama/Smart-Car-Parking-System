var mongoose = require('mongoose');
var SlotSchema = new mongoose.Schema({
     SlotID: Integer,
    Availability : String,


});
mongoose.model('Slot', UserSchema);

module.exports = mongoose.model('Slot');