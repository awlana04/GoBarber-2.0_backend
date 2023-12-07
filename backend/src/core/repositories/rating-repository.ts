import IRatingRepository from '@interfaces/i-rating-repository';

import IRating from '../interfaces/i-rating';
import IUser from '../interfaces/i-user';
import IBarber from '../interfaces/i-barber';

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

  public async findBarberId(
    barberId: string,
  ): Promise<(IBarber & { rating: IRating[] }) | null> {
    return await prisma.barber.findFirst({
      where: {
        id: barberId,
      },
      include: {
        rating: true,
      },
    });
  }

  public async findUserRatings(userId: string): Promise<IRating[] | null> {
    return await prisma.rating.findMany({ where: { userId } });
  }

  public async getAllRatings(barberId: string): Promise<IRating[] | null> {
    return await prisma.rating.findMany({ where: { barberId } });
  }

  public async save(data: ICreateRatingDTO): Promise<IRating> {
    return await prisma.rating.create({ data });
  }

  public async update(id: string, data: IUpdateRatingDTO): Promise<IRating> {
    return await prisma.rating.update({ where: { id }, data });
  }

  public async delete(id: string): Promise<IRating> {
    return await prisma.rating.delete({ where: { id } });
  }
}
