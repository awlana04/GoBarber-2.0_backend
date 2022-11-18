import IAppointmentUsecase from '../models/i-appointments-usecase';

import IAppointmentRepository from '@domain/interfaces/i-appointment-repository';

import User from '@entities/user';
import Barber from '@entities/barber';
import Appointment from '@entities/appointment';

import AppError from '@shared/app-error';

export default class AppointmentsUsecase implements IAppointmentUsecase {
  constructor(private appointmentsRepository: IAppointmentRepository) {}

  public async checkUserExists(userId: string): Promise<User | null> {
    const checkUserExists = await this.appointmentsRepository.findUserId(
      userId
    );

    if (!checkUserExists) {
      throw new AppError('User does not exists', 404);
    }

    return null;
  }

  public async checkBarberExists(barberId: string): Promise<Barber | null> {
    const checkBarberExists = await this.appointmentsRepository.findBarberId(
      barberId
    );

    if (!checkBarberExists) {
      throw new AppError('Barber does not exists', 404);
    }

    return null;
  }

  public async checkIsValidDate(
    date: Date,
    barberId: string
  ): Promise<Appointment | null> {
    const checkDateAlreadyExists = await this.appointmentsRepository.findByDate(
      date,
      barberId
    );

    if (checkDateAlreadyExists) {
      throw new AppError('This date is already booked', 406);
    }

    if (date < new Date()) {
      throw new AppError('You can not book an appointment in a past date', 406);
    }

    return null;
  }

  public async checkAppointmentExists(id: string): Promise<Appointment | null> {
    const checkAppointmentExists = await this.appointmentsRepository.findById(
      id
    );

    if (!checkAppointmentExists) {
      throw new Error('Appointment does not exists');
    }

    return null;
  }
}
