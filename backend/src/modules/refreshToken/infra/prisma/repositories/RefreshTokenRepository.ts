import { Prisma, RefreshToken } from '@prisma/client';

import prisma from '../../../../../shared/infra/prisma/prisma';
import ICreateRefreshTokenDTO from '../../../dtos/ICreateRefreshTokenDTO';

import IRefreshTokenRepository from '../../../repositories/IRefreshTokenRepository';

export default class RefreshTokenRepository implements IRefreshTokenRepository {
  public async findByRefreshToken(id: string): Promise<RefreshToken> {
    const refreshToken = await prisma.refreshToken.findUnique({
      where: {
        id,
      },
    });

    return refreshToken;
  }

  public async create(data: ICreateRefreshTokenDTO): Promise<RefreshToken> {
    const refreshToken = await prisma.refreshToken.create({
      data,
    });

    return refreshToken;
  }

  public async deletePastRefreshToken(
    userId: string
  ): Promise<Prisma.BatchPayload> {
    const refreshToken = await prisma.refreshToken.deleteMany({
      where: {
        userId,
      },
    });

    return refreshToken;
  }
}
