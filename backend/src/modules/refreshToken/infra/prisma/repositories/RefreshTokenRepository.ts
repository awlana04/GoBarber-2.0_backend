import { Prisma, RefreshToken, User } from '@prisma/client';

import prisma from '../../../../../shared/infra/prisma/prisma';

import IRefreshTokenRepository from '../../../repositories/IRefreshTokenRepository';
import ICreateRefreshTokenDTO from '../../../dtos/ICreateRefreshTokenDTO';

export default class RefreshTokenRepository implements IRefreshTokenRepository {
  public async findByRefreshToken(id: string): Promise<RefreshToken> {
    return await prisma.refreshToken.findUnique({
      where: {
        id,
      },
    });
  }

  public async create(data: ICreateRefreshTokenDTO): Promise<RefreshToken> {
    return await prisma.refreshToken.create({
      data,
    });
  }

  public async deletePastRefreshToken(
    userId: string
  ): Promise<Prisma.BatchPayload> {
    return await prisma.refreshToken.deleteMany({
      where: {
        userId,
      },
    });
  }
}
