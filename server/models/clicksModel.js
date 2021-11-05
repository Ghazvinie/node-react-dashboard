const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoClicksSchema = new Schema({
    data: String,
    total: Number,
});

module.exports = mongoose.model('SiteMetrics', mongoClicksSchema);