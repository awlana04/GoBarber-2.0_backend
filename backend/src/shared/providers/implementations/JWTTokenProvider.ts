import jwt from 'jsonwebtoken';

import ITokenProvider from '../models/ITokenProvider';

export default class JWTTokenProvider implements ITokenProvider {
  public async createToken(payload: string): Promise<string> {
    return jwt.sign({ payload }, process.env.SECRET, { expiresIn: '15m' });
  }
}
