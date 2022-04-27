import Appointment from '../entities/appointment';

import IAppointmentRepository from '../interfaces/IAppointmentRepository';

interface IUpdateAppointmentServiceRequest {
  id: string;
  date: Date;
}

export default class UpdateAppointmentService {
  constructor(private appointmentRepository: IAppointmentRepository) {}

  public async handle({
    id,
    date,
  }: IUpdateAppointmentServiceRequest): Promise<Appointment> {
    const checkAppointmentExists = await this.appointmentRepository.findById(
      id
    );

    if (!checkAppointmentExists) {
      throw new Error('Appointment does not exists');
    }

    const appointment = await this.appointmentRepository.update(id, date);

    return appointment;
  }
}
