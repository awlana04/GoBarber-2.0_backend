import IAppointmentRepository from '@interfaces/i-appointment-repository';
import IAppointmentUsecase from '@usecases/models/i-appointments-usecase';

import Appointment from '@entities/appointment';

export default class DeleteAppointmentService {
  constructor(
    private readonly appointmentsRepository: IAppointmentRepository,
    private readonly appointmentsUsecase: IAppointmentUsecase
  ) {}

  public async handle(id: string): Promise<Appointment> {
    await this.appointmentsUsecase.checkAppointmentExists(id);

    const appointment = await this.appointmentsRepository.delete(id);

    return appointment;
  }
}
