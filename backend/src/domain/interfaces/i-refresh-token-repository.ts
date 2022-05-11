import RefreshToken from '@entities/refresh-token';

export default interface IRefreshTokenRepository {
  findByRefreshToken(id: string): Promise<RefreshToken | null>;
  save(refreshToken: RefreshToken): Promise<RefreshToken>;
  deletePastRefreshToken(userId: string): Promise<void>;
}
