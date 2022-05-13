import IRefreshTokensUsecase from '../models/i-refresh-tokens-usecase';

import IRefreshTokenRepository from '@interfaces/i-refresh-token-repository';

import RefreshToken from '@entities/refresh-token';

export default class RefreshTokenUsecase implements IRefreshTokensUsecase {
  constructor(
    private readonly refreshTokensRepository: IRefreshTokenRepository
  ) {}

  public async findRefreshToken(id: string): Promise<RefreshToken | null> {
    const refreshToken = await this.refreshTokensRepository.findByRefreshToken(
      id
    );

    if (!refreshToken) {
      throw new Error('Invalid refresh token');
    }

    return null;
  }
}