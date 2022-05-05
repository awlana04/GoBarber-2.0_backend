import ICheckUserDoesNotExsitsUsecase from '../../models/users/i-check-user-does-not-exists-usecase';
import IUserRepository from '@interfaces/i-user-repository';

import User from '@domain/entities/modules/user';

export default class CheckUserDoesNotExistsUsecase
  implements ICheckUserDoesNotExsitsUsecase
{
  constructor(private usersRepository: IUserRepository) {}

  public async run(id: string): Promise<User | null> {
    const checkUserExists = await this.usersRepository.findById(id);

    if (!checkUserExists) {
      throw new Error('User does not exists');
    }

    return null;
  }
}
