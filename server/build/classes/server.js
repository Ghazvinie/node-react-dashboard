"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var Server = /** @class */ (function () {
    function Server(port, app) {
        this.port = port || 4000;
        this.app = app;
    }
    ;
    Server.prototype.listen = function () {
        var _this = this;
        try {
            this.app.listen(this.port, function () { return console.log("Server listening on " + _this.port); });
        }
        catch (error) {
            console.log(error);
        }
    };
    ;
    return Server;
}());
exports.default = Server;
;
