var mongoose = require('mongoose');
var SlotSchema = new mongoose.Schema({
     SlotID: Integer,

});
mongoose.model('Slot', UserSchema);

module.exports = mongoose.model('Slot');