import IAppointmentRepository from '@interfaces/i-appointment-repository';

import IAppointment from '@core/interfaces/i-appointment';

export default class ViewAppointmentService {
  constructor(
    private readonly appointmentsRepository: IAppointmentRepository
  ) {}

  public async handle(id: string): Promise<IAppointment> {
    const appointment = await this.appointmentsRepository.findById(id);

    if (!appointment) {
      throw new Error('Appointment does not exists');
    }

    return appointment;
  }
}
