import { RefreshToken } from '@prisma/client';

export default interface ITokenProvider {
  createToken(payload: string): Promise<string>;
}
