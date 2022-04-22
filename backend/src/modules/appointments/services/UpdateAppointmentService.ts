import { Appointment } from '@prisma/client';

import IAppointmentRepository from '../repositories/IAppointmentRepository';
import IAppointmentProvider from '../providers/models/IAppointmentProvider';

import AppError from '../../../shared/errors/AppError';

interface IRequest {
  id: string;
  date: Date;
  barberId: string;
}

export default class UpdateAppointmentService {
  constructor(
    private appointmentRepository: IAppointmentRepository,
    private appointmentProvider: IAppointmentProvider
  ) {}

  public async handle({ id, date, barberId }: IRequest): Promise<Appointment> {
    const checkAppointmentExists =
      await this.appointmentRepository.findAppointmentById(id);

    if (!checkAppointmentExists) {
      throw new AppError('Appointment does not exists', 404);
    }

    await this.appointmentProvider.bookedDate(
      date,
      checkAppointmentExists.barberId
    );

    const appointment = await this.appointmentRepository.update(
      id,
      date,
      barberId
    );

    return appointment;
  }
}
