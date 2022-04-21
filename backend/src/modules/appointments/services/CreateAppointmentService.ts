import { Appointment } from '@prisma/client';
import { startOfHour } from 'date-fns';

import IAppointmentRepository from '../repositories/IAppointmentRepository';

import AppError from '../../../shared/errors/AppError';

interface IRequest {
  date: Date;
  barberId: string;
  userId: string;
}

export default class CreateAppointmentService {
  constructor(private appointmentRepository: IAppointmentRepository) {}

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

    const isBookedInAPastDate = startOfHour(Date.now());

    if (isBookedInAPastDate > date) {
      throw new AppError('You can not book an appointment in a past date', 406);
    }

    const bookedData = await this.appointmentRepository.findAppointmentByDate(
      date,
      barberId
    );

    if (bookedData) {
      throw new AppError('This date is already booked', 406);
    }

    const appointment = await this.appointmentRepository.create({
      date,
      barberId,
      userId,
    });

    return appointment;
  }
}
