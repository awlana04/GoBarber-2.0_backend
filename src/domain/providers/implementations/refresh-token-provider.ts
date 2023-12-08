import IRefreshTokenProvider from '../models/i-refresh-token-provider';

import IRefreshTokenRepository from '@domain/dtos/interfaces/i-refresh-token-repository';
import IExpiresInDateAdapter from '@adapters/models/i-expires-in-date-adapter';

import IRefreshToken from '@core/interfaces/i-refresh-token';

export default class RefreshTokenProvider implements IRefreshTokenProvider {
  constructor(
    private readonly refreshTokenRepository: IRefreshTokenRepository,
    private readonly expiresInDateAdapter: IExpiresInDateAdapter,
  ) {}

  public async createRefreshToken(userId: string): Promise<IRefreshToken> {
    await this.refreshTokenRepository.deletePastRefreshToken(userId);

    const expiresIn = await this.expiresInDateAdapter.expiresIn(30, 'days');

    return await this.refreshTokenRepository.save({
      expiresIn,
      userId,
    });
  }
}
