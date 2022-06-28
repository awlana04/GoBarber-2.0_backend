import jwt from 'jsonwebtoken';

import ITokenAdapter from '../models/i-token-adapter';

export default class TokenAdapter implements ITokenAdapter {
  public async createToken(payload: string): Promise<string> {
    return jwt.sign({ payload }, process.env.SECRET, { expiresIn: '15m' });
  }
}
