"use strict";
// const { graphqlHTTP } = require('express-graphql');
// const express = require('express');
// const Router = express.Router();
// export default class RouterClass {
//     Router: any;
//     constructor(Router: any){
// this.Router = Router
//     };
//     // graphQLRoute(route: string, controller: any){
//     //     console.log('hello')
//     //     return this.Router.use(route, controller)
//     // }
//     // rootRoute(req:any, res:any, next:any){
//     //     res.send('hello from root')
//     // }
//    Router.get()
// }
Router.get('/', function (req, res) { return res.send('hello'); });
