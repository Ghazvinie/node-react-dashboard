const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql;

const ClicksDataType = new GraphQLObjectType({
    name: 'ClicksData',
    fields: () => ({
        date: { type: GraphQLString },
        total: { type: GraphQLInt },
    })
});

export default ClicksDataType;