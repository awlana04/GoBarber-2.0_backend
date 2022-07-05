import jwt from 'jsonwebtoken';

import ITokenAdapter from '../models/i-token-adapter';

export default class TokenAdapter implements ITokenAdapter {
  public async createToken(payload: string): Promise<string> {
    if (process.env.NODE_ENV === 'test') {
      return jwt.sign({ payload }, 'gobarber-2.0', { expiresIn: '15m' });
    }

    return jwt.sign({ payload }, process.env.SECRET, { expiresIn: '15m' });
  }
}
