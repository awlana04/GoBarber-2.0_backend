import { Barber, User } from '@prisma/client';

import prisma from '../../../../../shared/infra/prisma/prisma';

import IBarberRepository from '../../../repositories/IBarberRepository';
import ICreateBarberDTO from '../../../dtos/ICreateBarberDTO';
import IUpdateBarberDTO from '../../../dtos/IUpdateBarberDTO';

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

  public async findBarberById(id: string): Promise<Barber> {
    return await prisma.barber.findUnique({
      where: {
        id,
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

  public async updateBarber(
    barberId: string,
    data: IUpdateBarberDTO
  ): Promise<Barber> {
    return await prisma.barber.update({
      where: {
        id: barberId,
      },
      data,
    });
  }

  public async updateBarberPassword(
    barberId: string,
    password: string
  ): Promise<Barber & { user: User }> {
    return await prisma.barber.update({
      where: {
        id: barberId,
      },
      data: {
        user: {
          update: {
            password,
          },
        },
      },
      include: {
        user: true,
      },
    });
  }

  public async updateBarberAvatar(
    barberId: string,
    avatar: string
  ): Promise<Barber & { user: User }> {
    return await prisma.barber.update({
      where: {
        id: barberId,
      },
      data: {
        user: {
          update: {
            avatar,
          },
        },
      },
      include: {
        user: true,
      },
    });
  }
}
