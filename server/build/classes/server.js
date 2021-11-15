"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ServerClass = /** @class */ (function () {
    function ServerClass(port, app) {
        this.port = port || 4000;
        this.app = app;
    }
    ;
    ServerClass.prototype.listen = function () {
        var _this = this;
        try {
            this.app.listen(this.port, function () { return console.log("Server listening on " + _this.port); });
        }
        catch (error) {
            console.log(error);
        }
    };
    ;
    ServerClass.prototype.addMiddleWare = function (middleWare) {
        this.app.use(middleWare);
    };
    return ServerClass;
}());
;
module.exports = { ServerClass: ServerClass };
