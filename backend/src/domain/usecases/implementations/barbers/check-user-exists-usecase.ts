import ICheckUserExistsUsecase from '@domain/usecases/models/barbers/i-check-user-exists-usecase';
import IBarberRepository from '@interfaces/i-barber-repository';

import User from '@entities/user';

export default class CheckUserExistsUsecase implements ICheckUserExistsUsecase {
  constructor(private barbersRepository: IBarberRepository) {}

  public async run(userId: string): Promise<User | null> {
    const checkUserExists = await this.barbersRepository.findUserId(userId);

    if (!checkUserExists) {
      throw new Error('User does not exists');
    }

    return null;
  }
}
