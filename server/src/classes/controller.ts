const { graphqlHTTP } = require('express-graphql');
const testSchema = require('../schema/testSchema');


class ControllerClass {

    async getFunction(req: Request, res: Response) {
        res.json('helldo');
    };

    graphQLFunction() {
        return graphqlHTTP({
            schema: testSchema,
            graphiql: true
        });
    }
}

module.exports = { Controller: ControllerClass }