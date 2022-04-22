import { RefreshToken } from '@prisma/client';

export default interface IRefreshTokenProvider {
  createRefreshToken(userId: string): Promise<RefreshToken>;
}
