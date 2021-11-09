const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql;

const MemoryDataType = new GraphQLObjectType({
    name: 'MemoryData',
    fields: () => ({
        date: { type: GraphQLString },
        active: { type: GraphQLInt },
        available: { type: GraphQLInt }
    })
});

export default MemoryDataType;