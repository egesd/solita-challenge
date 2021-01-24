const mongoose = require('mongoose');

const NameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
});

const Name = mongoose.model('names', NameSchema);
module.exports = Name;