const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoDisksIOSchema = new Schema({
    date: String,
    read: Number,
    write: Number
});

module.exports = mongoose.model('Disks', mongoDisksIOSchema);