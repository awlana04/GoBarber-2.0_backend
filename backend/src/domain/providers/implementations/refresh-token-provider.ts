import IRefreshTokenProvider from '../models/i-refresh-token-provider';

import IRefreshTokenRepository from '@interfaces/i-refresh-token-repository';

import RefreshToken from '@entities/refresh-token';

export default class RefreshTokenProvider implements IRefreshTokenProvider {
  constructor(private refreshTokenRepository: IRefreshTokenRepository) {}

  public async createRefreshToken(userId: string): Promise<RefreshToken> {
    await this.refreshTokenRepository.deletePastRefreshToken(userId);

    const expiresIn = Date.UTC(2022, 6) as unknown as Date;

    const refreshToken = RefreshToken.create({ expiresIn, userId });

    await this.refreshTokenRepository.save({ expiresIn, userId });

    return refreshToken;
  }
}
