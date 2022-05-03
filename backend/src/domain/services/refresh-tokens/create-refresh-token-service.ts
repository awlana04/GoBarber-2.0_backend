import crypto from 'crypto';

import IRefreshTokenRepository from '@interfaces/i-refresh-token-repository';

import RefreshToken from '@entities/refresh-token';

interface CreateRefreshTokenServiceRequest {
  id: string;
  expiresIn: Date;
  userId: string;
}

export default class CreateRefreshTokenService {
  constructor(private refreshTokenRepository: IRefreshTokenRepository) {}

  public async handle({
    id,
    expiresIn,
    userId,
  }: CreateRefreshTokenServiceRequest): Promise<RefreshToken | string> {
    const refreshToken = await this.refreshTokenRepository.findByRefreshToken(
      id
    );

    if (!refreshToken) {
      throw new Error('Invalid refresh token');
    }

    const token = crypto.randomUUID();

    const expiredRefreshToken = Date.now();

    if (!expiredRefreshToken) {
      return RefreshToken.create({ expiresIn, userId });
    }

    return token;
  }
}
