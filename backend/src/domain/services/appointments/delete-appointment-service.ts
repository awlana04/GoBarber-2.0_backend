import IAppointmentRepository from '@interfaces/i-appointment-repository';

import Appointment from '@entities/appointment';

export default class DeleteAppointmentService {
  constructor(private appointmentsRepository: IAppointmentRepository) {}

  public async handle(id: string): Promise<Appointment> {
    const checkAppointmentExists = await this.appointmentsRepository.findById(
      id
    );

    if (!checkAppointmentExists) {
      throw new Error('Appointment does not exists');
    }

    const appointment = await this.appointmentsRepository.delete(id);

    return appointment;
  }
}
