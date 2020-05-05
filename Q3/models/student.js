const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: '{PATH} is required!'
    },
    bio: {
        type: String
    },
    age: {
        type: Number
    },

})

module.exports = mongoose.model('User', UserSchema);
