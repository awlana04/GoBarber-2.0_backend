import { User } from '@prisma/client';

import IBarberRepository from '../repositories/IBarberRepository';

import AppError from '../../../shared/errors/AppError';

export default class DeleteBarberService {
  constructor(private barberRepository: IBarberRepository) {}

  public async handle(id: string): Promise<User> {
    const barber = await this.barberRepository.deleteBarber(id);

    if (!barber) {
      throw new AppError('Barber does not exists', 404);
    }

    return barber;
  }
}
