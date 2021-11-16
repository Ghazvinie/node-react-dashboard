require('dotenv').config();
const ServerClass = require('./classes/server');
const express = require('express');
const { graphQLRouter } = require('./routes/graphQLRoutes');

// const si = require('systeminformation');

// Init server and listen
const server = new ServerClass(process.env.PORT as string, express());
server.listen();

// Add routes
server.addMiddleWare(graphQLRouter);


/*
To Do
- Start on typeScript graphql schemas
*/