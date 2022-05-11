import crypto from 'crypto';

import IRefreshTokenRepository from '@interfaces/i-refresh-token-repository';

import RefreshToken from '@entities/refresh-token';

import IRefreshTokenUsecase from '@usecases/models/i-refresh-tokens-usecase';

interface CreateRefreshTokenServiceRequest {
  id: string;
  expiresIn: Date;
  userId: string;
}

export default class CreateRefreshTokenService {
  constructor(
    private readonly refreshTokensRepository: IRefreshTokenRepository,
    private readonly refreshTokensUsecase: IRefreshTokenUsecase
  ) {}

  public async handle({
    id,
    expiresIn,
    userId,
  }: CreateRefreshTokenServiceRequest): Promise<RefreshToken | string> {
    await this.refreshTokensUsecase.findRefreshToken(id);

    const token = crypto.randomUUID();

    const expiredRefreshToken = Date.now();

    if (!expiredRefreshToken) {
      return RefreshToken.create({ expiresIn, userId });
    }

    return token;
  }
}
