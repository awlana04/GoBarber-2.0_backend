import IAppointmentRepository from '@interfaces/i-appointment-repository';
import IAppointmentUsecase from '@usecases/models/i-appointments-usecase';

import Appointment from '@entities/appointment';

interface IUpdateAppointmentServiceRequest {
  id: string;
  date: Date;
}

export default class UpdateAppointmentService {
  constructor(
    private readonly appointmentRepository: IAppointmentRepository,
    private readonly appointmentsUsecase: IAppointmentUsecase
  ) {}

  public async handle({
    id,
    date,
  }: IUpdateAppointmentServiceRequest): Promise<Appointment> {
    await this.appointmentsUsecase.checkAppointmentExists(id);

    const appointment = await this.appointmentRepository.update(id, date);

    return appointment;
  }
}
