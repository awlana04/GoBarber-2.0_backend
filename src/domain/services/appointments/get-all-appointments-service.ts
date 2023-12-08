import IAppointmentRepository from '@interfaces/i-appointment-repository';
import IAppointmentUsecase from '@usecases/models/i-appointments-usecase';

import IBarber from '@core/interfaces/i-barber';
import IAppointment from '@core/interfaces/i-appointment';

export default class GetAllAppointmentsService {
  constructor(
    private readonly appointmmentsRepository: IAppointmentRepository,
    private readonly appointmentsUsecase: IAppointmentUsecase,
  ) {}

  public async handle(barberId: string): Promise<IBarber | IAppointment[]> {
    await this.appointmentsUsecase.checkBarberExists(barberId);

    const appointments =
      await this.appointmmentsRepository.findAllAppointments(barberId);

    return appointments;
  }
}
