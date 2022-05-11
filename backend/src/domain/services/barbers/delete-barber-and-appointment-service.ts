import IBarberRepository from '@interfaces/i-barber-repository';

import Barber from '@entities/barber';
import Appointment from '@entities/appointment';

import IBarbersUsecase from '@usecases/models/i-barbers-usecase';

export default class DeleteBarberAndAppointmentService {
  constructor(
    private readonly barbersRepository: IBarberRepository,
    private readonly barbersUsecase: IBarbersUsecase
  ) {}

  public async handle(id: string): Promise<Barber | Appointment> {
    await this.barbersUsecase.checkBarberDoesNotExists(id);

    const barber = await this.barbersRepository.deleteBarberAndAppointments(id);

    return barber;
  }
}
