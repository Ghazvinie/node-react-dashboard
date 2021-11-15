"use strict";
require('dotenv').config();
var Controller = require('./classes/controller').Controller;
var ServerClass = require('./classes/server').ServerClass;
var express = require('express');
var Router = express.Router();
// const si = require('systeminformation');
var server = new ServerClass(process.env.PORT, express());
server.listen();
var controller = new Controller();
server.addMiddleWare(Router);
Router.get('/', function (req, res) { return controller.getFunction(req, res); });
Router.use('/graphql', controller.graphQLFunction());
/*
To Do
- See if can make Router into own class
- Add interface for Router class and controller class
- Start on typeScript graphql schemas
*/ 
