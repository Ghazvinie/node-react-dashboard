"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouterClass = void 0;
var express = require('express');
var Router = express.Router();
var RouterClass = /** @class */ (function () {
    function RouterClass(path) {
        this.path = path;
        this.routes = [];
    }
    ;
    RouterClass.prototype.initRouter = function () {
        return Router;
    };
    ;
    RouterClass.prototype.useRoute = function (object) {
        console.log('hje;;p');
        Router.use("" + this.path + object.ext, function (req, res) { return object.controller(req, res); });
    };
    return RouterClass;
}());
exports.RouterClass = RouterClass;
