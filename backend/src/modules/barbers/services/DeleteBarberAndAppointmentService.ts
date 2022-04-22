import { Barber } from '@prisma/client';

import IBarberRepository from '../repositories/IBarberRepository';

import AppError from '../../../shared/errors/AppError';

export default class DeleteBarberAndAppointmentService {
  constructor(private barberRepository: IBarberRepository) {}

  public async handle(id: string): Promise<Barber> {
    const barber = await this.barberRepository.deleteBarberAndAppointment(id);

    if (!barber) {
      throw new AppError('Barber does not exists', 404);
    }

    return barber;
  }
}
