export default interface ServerInterface {
    app: any,
    port: number
    listen(): void
};