const express = require('express');
import ServerInterface from '../interfaces/serverInterface';

class Server implements ServerInterface {
    port: number;
    app: any;

    constructor(port: number, app: any){
        this.port = port || 4000;
        this.app = app;
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`Server listening on ${this.port}`);
        }).catch((err : unknown) => console.log(err));
    };

};

