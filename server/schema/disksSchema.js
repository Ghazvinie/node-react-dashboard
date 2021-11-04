const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = graphql;

const DiskIODataType = new GraphQLObjectType({
    name: 'DisksIOData',
    fields: () => ({
        date: { type: GraphQLString },
        read: { type: GraphQLInt },
        write: { type: GraphQLInt }
    })
});

export default DiskIODataType;