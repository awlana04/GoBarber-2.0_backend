import { User } from '@prisma/client';

import IBarberRepository from '../repositories/IBarberRepository';
import IStorageProvider from '../../../shared/providers/models/IStorageProvider';

import AppError from '../../../shared/errors/AppError';

export default class DeleteBarberService {
  constructor(
    private barberRepository: IBarberRepository,
    private storageProvider: IStorageProvider
  ) {}

  public async handle(id: string): Promise<User> {
    const barber = await this.barberRepository.deleteBarber(id);

    if (!barber) {
      throw new AppError('Barber does not exists', 404);
    }

    await this.storageProvider.deleteFile(barber.avatar);

    return barber;
  }
}
