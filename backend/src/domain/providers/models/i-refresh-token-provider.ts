import RefreshToken from '@entities/refresh-token';

export default interface IRefreshTokenProvider {
  createRefreshToken(userId: string): Promise<RefreshToken>;
}
