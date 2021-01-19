const mongoose = require('mongoose');

const NameSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Amount: {
        type: Number,
        required: true,
    },
});

const Name = mongoose.model('Name', NameSchema);
module.exports = Name;