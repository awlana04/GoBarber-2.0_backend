import IRefreshToken from '@core/interfaces/i-refresh-token';

export default interface IRefreshTokenProvider {
  createRefreshToken(userId: string): Promise<IRefreshToken>;
}
