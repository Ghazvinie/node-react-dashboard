const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
} = graphql;

const CPUDataType = new GraphQLObjectType({
    name: 'CPUDATA',
    fields: () => ({
        date: { type: GraphQLString },
        avgLoad: { type: GraphQLFloat },
    })
});

export default CPUDataType;
