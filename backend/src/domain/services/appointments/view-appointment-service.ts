import IAppointmentRepository from '@interfaces/i-appointment-repository';

import Appointment from '@entities/appointment';

export default class ViewAppointmentService {
  constructor(private appointmentsRepository: IAppointmentRepository) {}

  public async handle(id: string): Promise<Appointment> {
    const appointment = await this.appointmentsRepository.findById(id);

    if (!appointment) {
      throw new Error('Appointment does not exists');
    }

    return appointment;
  }
}
