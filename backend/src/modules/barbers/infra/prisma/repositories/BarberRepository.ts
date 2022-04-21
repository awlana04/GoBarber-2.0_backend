import { Barber, User } from '@prisma/client';

import prisma from '../../../../../shared/infra/prisma/prisma';

import ICreateBarberDTO from '../../../dtos/ICreateBarberDTO';
import IBarberRepository from '../../../repositories/IBarberRepository';

export default class BarberRepository implements IBarberRepository {
  public async findBarberByUserId(
    id: string
  ): Promise<User & { barber: Barber }> {
    return await prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        barber: true,
      },
    });
  }

  public async findBarberByName(name: string): Promise<Barber> {
    return await prisma.barber.findUnique({
      where: {
        name,
      },
    });
  }

  public async create(data: ICreateBarberDTO): Promise<Barber> {
    return await prisma.barber.create({
      data,
    });
  }
}
