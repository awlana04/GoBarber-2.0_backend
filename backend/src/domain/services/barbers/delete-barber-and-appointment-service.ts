import IBarberRepository from '@interfaces/i-barber-repository';

import Barber from '@entities/barber';
import Appointment from '@entities/appointment';

import ICheckBarberDoesNotExists from '@usecases/models/barbers/i-check-barber-does-not-exists-usecase';

export default class DeleteBarberAndAppointmentService {
  constructor(
    private barbersRepository: IBarberRepository,
    private checkBarberDoesNotExists: ICheckBarberDoesNotExists
  ) {}

  public async handle(id: string): Promise<Barber | Appointment> {
    await this.checkBarberDoesNotExists.run(id);

    const barber = await this.barbersRepository.deleteBarberAndAppointments(id);

    return barber;
  }
}
