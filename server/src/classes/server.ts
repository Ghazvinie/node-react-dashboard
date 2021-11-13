import ServerInterface from '../interfaces/serverInterface';

export default class Server implements ServerInterface {
    port: string | number;
    app: any;

    constructor(port: string | number, app: any){
        this.port = port || 4000;
        this.app = app;
    };

    listen() {
        try {
            this.app.listen(this.port, () => console.log(`Server listening on ${this.port}`));
        } catch (error) {
            console.log(error);
        }
    };
};

