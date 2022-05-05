import ICheckUserAlreadyExistsUsecase from '../../models/barbers/i-check-user-exists-usecase';
import IUserRepository from '@interfaces/i-user-repository';

import User from '@domain/entities/modules/user';

export default class CheckUserAlreadyExistsUseCase
  implements ICheckUserAlreadyExistsUsecase
{
  constructor(private usersRepository: IUserRepository) {}

  public async run(email: string): Promise<User | null> {
    const checkUserExists = await this.usersRepository.findByEmail(email);

    if (checkUserExists) {
      throw new Error('User already exists');
    }

    return null;
  }
}
