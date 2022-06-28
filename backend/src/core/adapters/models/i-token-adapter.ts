export default interface ITokenAdapter {
  createToken(payload: string): Promise<string>;
}
