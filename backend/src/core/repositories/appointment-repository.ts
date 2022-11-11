import IAppointmentRepository from '@domain/interfaces/i-appointment-repository';

import IUser from '../interfaces/i-user';
import IBarber from '../interfaces/i-barber';
import IAppointment from '../interfaces/i-appointment';

import ICreateAppointmentDto from '@dtos/i-create-appointment-dto';

import prisma from '@database/index';

export default class AppointmentRepository implements IAppointmentRepository {
  public async findById(id: string): Promise<IAppointment | null> {
    return await prisma.appointment.findUnique({ where: { id } });
  }

  public async findByDate(
    date: Date,
    barberId: string
  ): Promise<IAppointment | null> {
    return await prisma.appointment.findFirst({ where: { date, barberId } });
  }

  public async findUserId(
    userId: string
  ): Promise<(IUser & { appointment: IAppointment }) | null> {
    return await prisma.user.findUnique({
      where: { id: userId },
      include: { appointment: true },
    });
  }

  public async findBarberId(
    barberId: string
  ): Promise<(IBarber & { appointment: IAppointment }) | null> {
    return await prisma.barber.findUnique({
      where: { id: barberId },
      include: { appointment: true },
    });
  }

  public async findAllAppointments(
    barberId: string
  ): Promise<IBarber | IAppointment[]> {
    return await prisma.barber.findUnique({
      where: { id: barberId },
      include: { appointment: true },
    });
  }

  public async save(data: ICreateAppointmentDto): Promise<IAppointment> {
    return await prisma.appointment.create({ data });
  }

  public async update(id: string, date: Date): Promise<IAppointment> {
    return await prisma.appointment.update({ where: { id }, data: { date } });
  }

  public async delete(id: string): Promise<IAppointment> {
    return await prisma.appointment.delete({ where: { id } });
  }
}
