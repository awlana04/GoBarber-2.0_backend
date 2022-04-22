import { Appointment } from '@prisma/client';

import IAppointmentRepository from '../repositories/IAppointmentRepository';
import IAppointmentProvider from '../providers/models/IAppointmentProvider';

import AppError from '../../../shared/errors/AppError';

interface IRequest {
  date: Date;
  barberId: string;
  userId: string;
}

export default class CreateAppointmentService {
  constructor(
    private appointmentRepository: IAppointmentRepository,
    private appointmentProvider: IAppointmentProvider
  ) {}

  public async handle({
    date,
    barberId,
    userId,
  }: IRequest): Promise<Appointment> {
    const user = await this.appointmentRepository.findAppointmentByUser(userId);

    if (!user) {
      throw new AppError('User does not exists', 406);
    }

    const barber = await this.appointmentRepository.findAppointmentByBarber(
      barberId
    );

    if (!barber) {
      throw new AppError('Barber does not exists', 406);
    }

    await this.appointmentProvider.bookedDate(date, barberId);

    const appointment = await this.appointmentRepository.create({
      date,
      barberId,
      userId,
    });

    return appointment;
  }
}
