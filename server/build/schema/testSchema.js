const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema
} = graphql;

const data = [
    { name: 'name1', number: 123, id: 1 },
    { name: 'name2', number: 123, id: 2 },
    { name: 'name3', number: 123, id: 3 },
];

const TestDataType = new GraphQLObjectType({
    name: 'TestData',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        number: { type: GraphQLInt }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        testData: {
            type: TestDataType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                for (let i = 0; i < data.length; i++) {
                    if (data[i].id == args.id) return data[i];
                }
            }
        },
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});