const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    phone: {
        type: String,
        require: true,
    },
    userImage:{
        type:String,
        required: true,
    },
    created: {
        type: Date,
        dafault: Date.now,
    },
    role: {
        type: mongoose.Schema.ObjectId,
        ref: 'Role',
    },
    faculty: {
        type: mongoose.Schema.ObjectId,
        ref: 'Faculty',
    },
    academy: {
        type: mongoose.Schema.ObjectId,
        ref: 'Academy',
    },
});
module.exports = mongoose.model('User', userSchema);