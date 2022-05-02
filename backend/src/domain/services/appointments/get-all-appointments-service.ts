import IAppointmentRepository from '@interfaces/i-appointment-repository';

import Barber from '@entities/barber';
import Appointment from '@entities/appointment';

export default class GetAllAppointmentsService {
  constructor(private appointmmentsRepository: IAppointmentRepository) {}

  public async handle(barberId: string): Promise<Barber | Appointment[]> {
    const checkBarberExists = await this.appointmmentsRepository.findBarberId(
      barberId
    );

    if (!checkBarberExists) {
      throw new Error('Barber does not exists');
    }

    const appointments = await this.appointmmentsRepository.findAllAppointments(
      barberId
    );

    return appointments;
  }
}
