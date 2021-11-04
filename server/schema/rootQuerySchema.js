const graphql = require('graphql');
import ClicksDataType from './clicksSchema';
import LogsDataType from './logsSchema';
import CPUDataType from './cpuSchema';
import DiskIODataType from './disksSchema';
import MemoryDataType from './memorySchema';

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLList,
    GraphQLSchema
} = graphql;

const RootQuery = new GraphQLObjectType({
    name: 'RootQuery',
    fields: {
        clicksData: {
            type: ClicksDataType,
            args: { date: { type: GraphQLString } },
            resolve(parent, args) {
                // Get from DB
            }
        },
        logsData: {
            type: LogsDataType,
            args: { date: { type: GraphQLString } },
            resolve(parent, args) {
                // Get from DB
            }
        },
        cpuData: {
            type: CPUDataType,
            args: { date: { type: GraphQLString } },
            resolve(parent, args) {
                // Get from DB
            }
        },
        diskIOData: {
            type: DiskIODataType,
            args: { date: { type: GraphQLString } },
            resolve(parent, args) {
                // Get from DB
            }
        },
        memoryData: {
            type: MemoryDataType,
            args: { date: { type: GraphQLString } },
            resolve(parent, args) {
                // Get from DB
            }
        },
        
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});