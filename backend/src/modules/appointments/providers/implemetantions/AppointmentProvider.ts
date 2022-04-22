import { Appointment } from '@prisma/client';
import { startOfHour } from 'date-fns';

import IAppointmentProvider from '../models/IAppointmentProvider';
import IAppointmentRepository from '../../repositories/IAppointmentRepository';

import AppError from '../../../../shared/errors/AppError';

export default class AppointmentProvider implements IAppointmentProvider {
  constructor(private appointmentRepository: IAppointmentRepository) {}

  public async bookedDate(date: Date, barberId: string): Promise<any> {
    const bookedInAPastDate = startOfHour(Date.now());

    if (bookedInAPastDate > date) {
      throw new AppError('You can not book an appointment in a past date', 406);
    }

    const bookedDate = await this.appointmentRepository.findAppointmentByDate(
      date,
      barberId
    );

    if (bookedDate) {
      throw new AppError('This date is already booked', 406);
    }

    return;
  }
}
