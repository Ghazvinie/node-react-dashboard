"use strict";
require('dotenv').config();
var express = require('express');
var graphqlHTTP = require('express-graphql').graphqlHTTP;
var testSchema = require('./schema/testSchema');
var mongoose = require('mongoose');
var si = require('systeminformation');
var app = express();
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function () {
    console.log('Connected to DB...');
    var listener = app.listen(process.env.PORT || 4000, function () {
        console.log('Your app is listening on port ' + listener.address().port);
    });
})
    .catch(function (error) { return console.log(error); });
// setInterval(() => {
//   si.disksIO().then(data => console.log(data))
// },10000)
app.use('/graphql', graphqlHTTP({
    schema: testSchema,
    graphiql: true
}));
app.use('/', function (req, res) {
    console.log('hello');
});
