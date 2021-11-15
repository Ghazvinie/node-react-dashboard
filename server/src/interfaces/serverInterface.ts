export default interface ServerInterface {
    app: any;
    port: string | number;
    listen(): void;
    addMiddleWare(middleWare:any):void;
};