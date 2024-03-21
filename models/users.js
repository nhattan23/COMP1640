const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
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
    isAdmin: {
        type: Boolean,
        dafault: false,
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
}, {timestamps: true}
);
module.exports = mongoose.model('User', userSchema);