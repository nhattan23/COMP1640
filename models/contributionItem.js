const mongoose = require('mogoose');

const contributionItemSchema = mongoose.Schema({
    text: {
        type: String,
        required: false,
    },
    image: {
        type: String,
        required: false,
    },
});
module.exports = mongoose.Schema('ContributionItem', contributionItemSchema);