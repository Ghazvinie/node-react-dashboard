"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphQLRouter = void 0;
exports.graphQLRouter = require('express').Router();
var ControllerClass = require('../classes/controller');
var controller = new ControllerClass();
exports.graphQLRouter.use('/graphql', controller.graphQLFunction());
exports.graphQLRouter.get('/', function (req, res) { return controller.getFunction(req, res); });
