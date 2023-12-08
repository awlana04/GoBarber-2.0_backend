import RefreshToken from '@entities/refresh-token';

export default interface IRefreshTokensUsecase {
  findRefreshToken(id: string): Promise<RefreshToken | null>;
}
