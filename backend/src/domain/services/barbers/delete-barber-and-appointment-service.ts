import IBarberRepository from '@interfaces/i-barber-repository';

import Barber from '@entities/barber';
import Appointment from '@entities/appointment';

export default class DeleteBarberAndAppointmentService {
  constructor(private barbersRepository: IBarberRepository) {}

  public async handle(id: string): Promise<Barber | Appointment> {
    const checkBarberExists = await this.barbersRepository.findById(id);

    if (!checkBarberExists) {
      throw new Error('Barber does not exists');
    }

    const barber = await this.barbersRepository.deleteBarberAndAppointments(id);

    return barber;
  }
}
