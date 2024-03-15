const mongoose = require('mongoose');

const contributionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    submissionDate: {
        type: Date,
        required: true,
    },
    contributionItem: {
        type: mongoose.Schema.ObjectId,
        ref: 'ContributionItem',
    },
    users: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
    },
    systemConfig: {
        type: mongoose.Schema.ObjectId,
        ref: 'SystemConfig',
    },
})

module.exports = mongoose.Schema('Contribution', contributionSchema);