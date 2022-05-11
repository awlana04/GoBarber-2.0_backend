import IAppointmentRepository from '@interfaces/i-appointment-repository';

import Barber from '@entities/barber';
import Appointment from '@entities/appointment';

import IAppointmentUsecase from '@usecases/models/i-appointments-usecase';

export default class GetAllAppointmentsService {
  constructor(
    private readonly appointmmentsRepository: IAppointmentRepository,
    private readonly appointmentsUsecase: IAppointmentUsecase
  ) {}

  public async handle(barberId: string): Promise<Barber | Appointment[]> {
    await this.appointmentsUsecase.checkBarberExists(barberId);

    const appointments = await this.appointmmentsRepository.findAllAppointments(
      barberId
    );

    return appointments;
  }
}
