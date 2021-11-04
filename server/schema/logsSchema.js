const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString,
} = graphql;

// const SingleLogDataType = new GraphQLObjectType({
//     name : 'SingleLogData',
//     fields: () => ({
//         date: { type: GraphQLString },
//         message: { type: GraphQLString },
//         httpCode: { type: GraphQLString },
//         description: { type: GraphQLString },
//         stack: { type: GraphQLString }
//     })
// })

const LogsDataType = new GraphQLObjectType({
    name: 'LogsData',
    fields: () => ({
        date: { type: GraphQLString },
        message: { type: GraphQLString },
        httpCode: { type: GraphQLString },
        description: { type: GraphQLString },
        stack: { type: GraphQLString }
    })
});

export default LogsDataType;