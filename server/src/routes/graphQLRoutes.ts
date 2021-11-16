export const graphQLRouter = require('express').Router();
const ControllerClass = require('../classes/controller');
const controller = new ControllerClass();

graphQLRouter.use('/graphql', controller.graphQLFunction());
graphQLRouter.get('/', (req: Request, res: Response) => controller.getFunction(req, res));

