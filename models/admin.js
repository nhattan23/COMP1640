const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
        unique: true,
    },
    pwd: {
        type: String,
        required: true,
    },
});
module.exports = mongoose.Schema('Admin', adminSchema);