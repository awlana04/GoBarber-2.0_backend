import { Appointment } from '@prisma/client';

import IAppointmentRepository from '../repositories/IAppointmentRepository';

import AppError from '../../../shared/errors/AppError';

export default class ViewAppointmentService {
  constructor(private appointmentRepository: IAppointmentRepository) {}

  public async handle(id: string): Promise<Appointment> {
    const appointment = await this.appointmentRepository.findAppointmentById(
      id
    );

    if (!appointment) {
      throw new AppError('Appointment does not exists', 404);
    }

    return appointment;
  }
}
