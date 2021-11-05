const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoCPUSchema = new Schema({
    data: String,
    avgLoad: Number,
});

module.exports = mongoose.model('CPU', mongoCPUSchema);