import IRatingRepository from '@interfaces/i-rating-repository';

import IRating from '../interfaces/i-rating';
import IUser from '../interfaces/i-user';

import prisma from '@database/index';

import ICreateRatingDTO from '@dtos/i-create-rating-dto';
import IUpdateRatingDTO from '@dtos/i-update-rating-dto';

export default class RatingRepository implements IRatingRepository {
  public async findById(id: string): Promise<IRating | null> {
    return await prisma.rating.findUnique({ where: { id } });
  }

  public async findUserId(
    userId: string,
  ): Promise<(IUser & { rating: IRating[] }) | null> {
    return await prisma.user.findFirst({
      where: { id: userId },
      include: { rating: true },
    });
  }
}
