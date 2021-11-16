"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphqlHTTP = require('express-graphql').graphqlHTTP;
var testSchema = require('../schema/testSchema');
module.exports = /** @class */ (function () {
    function ControllerClass() {
    }
    ControllerClass.prototype.getFunction = function (req, res) {
        console.log('hell;o');
        res.json('helldo');
    };
    ;
    ControllerClass.prototype.graphQLFunction = function () {
        return graphqlHTTP({
            schema: testSchema,
            graphiql: true
        });
    };
    ;
    return ControllerClass;
}());
