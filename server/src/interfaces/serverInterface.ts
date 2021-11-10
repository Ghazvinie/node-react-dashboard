export default interface ServerInterface {
    app: any,
    port: string | number
    listen(): void
};