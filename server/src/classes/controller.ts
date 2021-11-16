const { graphqlHTTP } = require('express-graphql');
const testSchema = require('../schema/testSchema');
import ControllerInterface from "../interfaces/controllerInterface";


module.exports = class ControllerClass implements ControllerInterface {

   getFunction(req: Request, res: Response):void {
       console.log('hell;o')
        res.json('helldo');
    };

    graphQLFunction() {
        return graphqlHTTP({
            schema: testSchema,
            graphiql: true
        });
    };
};
