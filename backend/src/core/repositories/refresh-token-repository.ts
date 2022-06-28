import IRefreshTokenRepository from '@interfaces/i-refresh-token-repository';
import IRefreshToken from '../interfaces/i-refresh-token';
import ICreateRefreshTokenDTO from '@dtos/i-create-refresh-token-dto';

import prisma from '@database/index';

import BatchPayload from '@ports/batch-payload';

export default class RefreshTokenRepository implements IRefreshTokenRepository {
  public async findByRefreshToken(id: string): Promise<IRefreshToken> {
    return await prisma.refreshToken.findUnique({ where: { id } });
  }

  public async save(data: ICreateRefreshTokenDTO): Promise<IRefreshToken> {
    return await prisma.refreshToken.create({ data });
  }

  public async deletePastRefreshToken(userId: string): Promise<BatchPayload> {
    return await prisma.refreshToken.deleteMany({ where: { userId } });
  }
}
