require('dotenv').config();
const {Controller} = require('./classes/controller');
const {ServerClass} = require('./classes/server');
const express = require('express');
const Router = express.Router();

// const si = require('systeminformation');
const server = new ServerClass(process.env.PORT as string, express());
server.listen();

const controller = new Controller();

server.addMiddleWare(Router); 
Router.get('/', (req: Request, res: Response) => controller.getFunction(req, res));
Router.use('/graphql', controller.graphQLFunction());

/* 
To Do
- See if can make Router into own class 
- Add interface for Router class and controller class
- Start on typeScript graphql schemas
*/