import IAppointmentUsecase from '../models/i-appointments-usecase';

import IAppointmentRepository from '@domain/interfaces/i-appointment-repository';

import User from '@entities/user';
import Barber from '@entities/barber';
import Appointment from '@entities/appointment';

export default class AppointmentsUsecase implements IAppointmentUsecase {
  constructor(private appointmentsRepository: IAppointmentRepository) {}

  public async checkUserExists(userId: string): Promise<User | null> {
    const checkUserExists = await this.appointmentsRepository.findUserId(
      userId
    );

    if (!checkUserExists) {
      throw new Error('User does not exists');
    }

    return null;
  }

  public async checkBarberExists(barberId: string): Promise<Barber | null> {
    const checkBarberExists = await this.appointmentsRepository.findBarberId(
      barberId
    );

    if (!checkBarberExists) {
      throw new Error('Barber does not exists');
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
      throw new Error('This date is already booked');
    }

    if (date < new Date()) {
      throw new Error('You can not book an appointment in a past date');
    }

    const barber = await this.appointmentsRepository.findBarberId(barberId);

    if (!barber) {
      throw new Error('Barber does not exists');
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
