var mongoose = require('mongoose');

//table for user details

var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');

