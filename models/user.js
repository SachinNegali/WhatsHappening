const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    displayName: {
        type: String,
        required: true,
        unique: true,
    },
    // loggedInWith: {
    //     type: String,
    //     required: true,
    // },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    updatedAt: {
        type: Date,
        default: new Date(),
    },
})
var User = mongoose.model('user', userSchema);
module.exports = User;