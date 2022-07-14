import IBarberRepository from '@interfaces/i-barber-repository';

import prisma from '@database/index';

import IUser from '../interfaces/i-user';
import IBarber from '../interfaces/i-barber';

import ICreateBarberDTO from '@dtos/i-create-barber-dto';
import IUpdateBarberDTO from '@dtos/i-update-barber-dto';

export default class BarberRepository implements IBarberRepository {
  public async findById(id: string): Promise<IBarber | null> {
    return await prisma.barber.findUnique({ where: { id } });
  }

  public async findByName(name: string): Promise<IBarber | null> {
    return await prisma.barber.findUnique({ where: { name } });
  }

  public async findUserId(
    userId: string
  ): Promise<(IUser & { barber: IBarber }) | null> {
    return await prisma.user.findFirst({
      where: { id: userId },
      include: { barber: true },
    });
  }

  public async getAllBarbers(): Promise<IBarber[]> {
    return await prisma.barber.findMany({
      include: { user: { select: { avatar: true } } },
    });
  }

  public async save(data: ICreateBarberDTO): Promise<IBarber> {
    return await prisma.barber.create({ data });
  }

  public async update(id: string, data: IUpdateBarberDTO): Promise<IBarber> {
    return await prisma.barber.update({ where: { id }, data });
  }

  public async updatePassword(id: string, password: string): Promise<IBarber> {
    return await prisma.barber.update({
      where: { id },
      data: { user: { update: { password } } },
      include: { user: true },
    });
  }

  public async updateAvatar(id: string, avatar: string): Promise<IBarber> {
    return await prisma.barber.update({
      where: { id },
      data: { user: { update: { avatar } } },
      include: { user: true },
    });
  }

  public async delete(id: string): Promise<IBarber> {
    return await prisma.barber.delete({ where: { id } });
  }

  public async deleteBarberAndAppointments(id: string): Promise<IBarber> {
    return await prisma.barber.delete({ where: { id } });
  }
}
