
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoMemorySchema = new Schema({
    data: String,
    active: Number,
    free: Number
});

module.exports = mongoose.model('Memory', mongoMemorySchema);