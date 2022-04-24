import { RefreshToken } from '@prisma/client';
import jwt from 'jsonwebtoken';
import dayjs from 'dayjs';

import IRefreshTokenRepository from '../repositories/IRefreshTokenRepository';
import IRefreshTokenProvider from '../../../shared/providers/models/IRefreshTokenProvider';

import AppError from '../../../shared/errors/AppError';

interface IRequest {
  id: string;
  expiresIn?: number;
  userId?: string;
}

export default class CreateRefreshTokenService {
  constructor(
    private refreshToken: IRefreshTokenRepository,
    private refreshTokenProvider: IRefreshTokenProvider
  ) {}

  public async handle({
    id,
    expiresIn,
    userId,
  }: IRequest): Promise<RefreshToken | string> {
    const refreshToken = await this.refreshToken.findByRefreshToken(id);

    if (!refreshToken) {
      throw new AppError('Refresh token invalid', 404);
    }

    const token = jwt.sign({ id: userId }, process.env.SECRET, {
      expiresIn: '30d',
    });

    const expiredRefreshToken = dayjs().isAfter(dayjs.unix(expiresIn));

    if (expiredRefreshToken) {
      return await this.refreshTokenProvider.createRefreshToken(userId);
    }

    return token;
  }
}
