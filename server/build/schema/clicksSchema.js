"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql = require('graphql');
var GraphQLObjectType = graphql.GraphQLObjectType, GraphQLString = graphql.GraphQLString, GraphQLInt = graphql.GraphQLInt;
var ClicksDataType = new GraphQLObjectType({
    name: 'ClicksData',
    fields: function () { return ({
        date: { type: GraphQLString },
        total: { type: GraphQLInt },
    }); }
});
exports.default = ClicksDataType;
