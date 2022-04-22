import { Barber } from '@prisma/client';

import IBarberRepository from '../repositories/IBarberRepository';

import AppError from '../../../shared/errors/AppError';

interface IRequest {
  id: string;
  avatar: string;
}

export default class UpdateBarberAvatarSerice {
  constructor(private barberRepository: IBarberRepository) {}

  public async handle({ id, avatar }: IRequest): Promise<Barber> {
    const checkBarberExists = await this.barberRepository.findBarberById(id);

    if (!checkBarberExists) {
      throw new AppError('Barber does not exists', 404);
    }

    const barber = await this.barberRepository.updateBarberAvatar(id, avatar);

    return barber;
  }
}
