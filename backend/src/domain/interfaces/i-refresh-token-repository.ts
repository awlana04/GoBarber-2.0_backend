import RefreshToken from '@entities/refresh-token';

export default interface IRefreshTokenRepository {
  findByRefreshToken(id: string): Promise<RefreshToken | null>;
  deletePastRefreshToken(userId: string): Promise<void>;
}
