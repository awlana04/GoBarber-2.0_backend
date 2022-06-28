import { hash, compare } from 'bcryptjs';

import IHastAdapter from '../models/i-hash-adapter';

export default class HashAdapter implements IHastAdapter {
  public async generateHash(payload: string): Promise<string> {
    return await hash(payload, 8);
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return await compare(payload, hashed);
  }
}
