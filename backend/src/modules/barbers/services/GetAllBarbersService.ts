import { Barber } from '@prisma/client';

import IBarberRepository from '../repositories/IBarberRepository';

import AppError from '../../../shared/errors/AppError';

export default class GetAllBarbersService {
  constructor(private barberRepository: IBarberRepository) {}

  public async handle(id: string): Promise<Barber> {
    const user = await this.barberRepository.findBarberByUserId(id);

    if (!user) {
      throw new AppError('User does not exists', 404);
    }

    const barber = await this.barberRepository.findAllBarbers();

    return barber;
  }
}
