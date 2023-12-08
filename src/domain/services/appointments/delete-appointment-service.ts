import IAppointmentRepository from '@interfaces/i-appointment-repository';
import IAppointmentUsecase from '@usecases/models/i-appointments-usecase';

import IAppointment from '@core/interfaces/i-appointment';

export default class DeleteAppointmentService {
  constructor(
    private readonly appointmentsRepository: IAppointmentRepository,
    private readonly appointmentsUsecase: IAppointmentUsecase,
  ) {}

  public async handle(id: string): Promise<IAppointment> {
    await this.appointmentsUsecase.checkAppointmentExists(id);

    const appointment = await this.appointmentsRepository.delete(id);

    return appointment;
  }
}
