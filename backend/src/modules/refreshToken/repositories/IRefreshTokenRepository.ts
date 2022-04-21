import { Prisma, RefreshToken } from '@prisma/client';

import ICreateRefreshTokenDTO from '../dtos/ICreateRefreshTokenDTO';

export default interface IRefreshTokenRepository {
  findByRefreshToken(id: string): Promise<RefreshToken | string>;
  create(data: ICreateRefreshTokenDTO): Promise<RefreshToken>;
  deletePastRefreshToken(userId: string): Promise<Prisma.BatchPayload>;
}
