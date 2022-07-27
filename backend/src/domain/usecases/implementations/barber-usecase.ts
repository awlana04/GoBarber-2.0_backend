import IBarbersUsecase from '../models/i-barbers-usecase';
import IBarberRepository from '@interfaces/i-barber-repository';

import User from '@entities/user';
import Barber from '@entities/barber';

import AppError from '@shared/app-error';

export default class BarbersUsecase implements IBarbersUsecase {
  constructor(private barbersRepository: IBarberRepository) {}

  public async checkUserExists(userId: string): Promise<User | null> {
    const user = await this.barbersRepository.findUserId(userId);

    if (!user) {
      throw new AppError('User does not exists', 404);
    }

    return null;
  }

  public async checkBarberNameAlreadyExists(
    name: string
  ): Promise<Barber | null> {
    const barber = await this.barbersRepository.findByName(name);

    if (barber) {
      throw new AppError('Barber name already taken');
    }

    return null;
  }

  public async checkBarberDoesNotExists(id: string): Promise<Barber | null> {
    const barber = await this.barbersRepository.findById(id);

    if (!barber) {
      throw new AppError('Barber does not exists', 404);
    }

    return null;
  }
}
