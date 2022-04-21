import { RefreshToken } from '@prisma/client';
import jwt from 'jsonwebtoken';
import dayjs from 'dayjs';

import IRefreshTokenRepository from '../repositories/IRefreshTokenRepository';

import AppError from '../../../shared/errors/AppError';

interface IRequest {
  id: string;
  expiresIn?: number;
  userId?: string;
}

export default class CreateRefreshTokenService {
  constructor(private refreshToken: IRefreshTokenRepository) {}

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
      expiresIn: '15m',
    });

    const expiredRefreshToken = dayjs().isAfter(dayjs.unix(expiresIn));

    if (expiredRefreshToken) {
      await this.refreshToken.deletePastRefreshToken(userId);

      const expiresIn = dayjs().add(30, 'day').unix();

      const refreshToken = await this.refreshToken.create({
        expiresIn,
        userId,
      });

      return refreshToken;
    }

    return token;
  }
}
