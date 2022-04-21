import prisma from '../../../../../shared/infra/prisma/prisma';

import IAppointmentRepository from '../../../repositories/IAppointmentRepository';
import ICreateAppointmentDTO from '../../../dtos/ICreateAppointmentDTO';
import { Appointment, Barber, User } from '@prisma/client';

export default class AppointmentRepository implements IAppointmentRepository {
  public async findAppointmentByUser(id: string): Promise<User> {
    return await prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  public async findAppointmentByBarber(id: string): Promise<Barber> {
    return await prisma.barber.findUnique({
      where: {
        id,
      },
    });
  }

  public async findAppointmentByDate(
    date: Date,
    barberId: string
  ): Promise<Appointment> {
    return await prisma.appointment.findFirst({
      where: {
        date,
        barberId,
      },
    });
  }

  public async create(data: ICreateAppointmentDTO): Promise<Appointment> {
    return await prisma.appointment.create({ data });
  }
}
