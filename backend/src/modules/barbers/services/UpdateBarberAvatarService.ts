import { Barber } from '@prisma/client';

import IBarberRepository from '../repositories/IBarberRepository';
import IStorageProvider from '../../../shared/providers/models/IStorageProvider';

import AppError from '../../../shared/errors/AppError';

interface IRequest {
  id: string;
  avatar: string;
}

export default class UpdateBarberAvatarService {
  constructor(
    private barberRepository: IBarberRepository,
    private storageProvider: IStorageProvider
  ) {}

  public async handle({ id, avatar }: IRequest): Promise<Barber> {
    const checkBarberExists = await this.barberRepository.findBarberById(id);

    if (!checkBarberExists) {
      throw new AppError('Barber does not exists', 404);
    }

    const file = await this.storageProvider.saveFile(avatar);

    const barber = await this.barberRepository.updateBarberAvatar(id, file);

    return barber;
  }
}
