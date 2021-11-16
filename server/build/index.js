"use strict";
require('dotenv').config();
var ServerClass = require('./classes/server');
var express = require('express');
var graphQLRouter = require('./routes/graphQLRoutes').graphQLRouter;
// const si = require('systeminformation');
// Init server and listen
var server = new ServerClass(process.env.PORT, express());
server.listen();
// Add routes
server.addMiddleWare(graphQLRouter);
/*
To Do
- Start on typeScript graphql schemas
*/ 
