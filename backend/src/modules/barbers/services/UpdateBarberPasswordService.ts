import { Barber } from '@prisma/client';

import IBarberRepository from '../repositories/IBarberRepository';
import IHashProvider from '../../users/providers/models/IHashProvider';

import AppError from '../../../shared/errors/AppError';

interface IRequest {
  id: string;
  password: string;
}

export default class UpdateBarberPasswordService {
  constructor(
    private barberRepository: IBarberRepository,
    private hashProvider: IHashProvider
  ) {}

  public async handle({ id, password }: IRequest): Promise<Barber> {
    const checkBarberExists = await this.barberRepository.findBarberById(id);

    if (!checkBarberExists) {
      throw new AppError('Barber does not exists', 404);
    }

    const hashedPassword = await this.hashProvider.generateHash(password);

    const barber = await this.barberRepository.updateBarberPassword(
      id,
      hashedPassword
    );

    delete barber.user.password;

    return barber;
  }
}
