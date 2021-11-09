const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mongoLogsSchema = new Schema({
    data: String,
    message: Number,
    httpCode: String,
    description: String,
    stack: String,
});

module.exports = mongoose.model('SystemLogs', mongoLogsSchema);