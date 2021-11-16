export default interface ControllerInterface {
 getFunction(req: Request, res: Response):void;
 graphQLFunction: Function
};