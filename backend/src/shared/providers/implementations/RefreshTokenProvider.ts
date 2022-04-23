import { RefreshToken } from '@prisma/client';
import dayjs from 'dayjs';

import IRefreshTokenProvider from '../models/IRefreshTokenProvider';

import IRefreshTokenRepository from '../../../modules/refreshToken/repositories/IRefreshTokenRepository';

export default class RefreshTokenProvider implements IRefreshTokenProvider {
  constructor(private refreshToken: IRefreshTokenRepository) {}

  public async createRefreshToken(userId: string): Promise<RefreshToken> {
    await this.refreshToken.deletePastRefreshToken(userId);

    const expiresIn = dayjs().add(30, 'day').unix();

    return await this.refreshToken.create({
      expiresIn,
      userId,
    });
  }
}
