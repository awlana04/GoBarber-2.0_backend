import { Appointment } from '@prisma/client';

import IAppointmentRepository from '../repositories/IAppointmentRepository';

import AppError from '../../../shared/errors/AppError';

export default class GetAllAppointmentsService {
  constructor(private appointmentsRepository: IAppointmentRepository) {}

  public async handle(id: string): Promise<Appointment[]> {
    const appointment = await this.appointmentsRepository.findAllAppointments(
      id
    );

    if (!appointment) {
      throw new AppError('Barber does not exists', 404);
    }

    return appointment;
  }
}
