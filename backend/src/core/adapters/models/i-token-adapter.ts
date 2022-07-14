export default interface ITokenAdapter {
  createToken(payload: string): Promise<string>;
  verifyToken(token: string): Promise<any>;
}
