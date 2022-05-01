import IUserRepository from '@interfaces/i-user-repository';

import User from '@entities/user';

export default class DeleteUserService {
  constructor(private usersRepository: IUserRepository) {}

  public async handle(id: string): Promise<User> {
    const checkUserExists = await this.usersRepository.findById(id);

    if (!checkUserExists) {
      throw new Error('User does not exists');
    }

    const user = await this.usersRepository.delete(id);

    return user;
  }
}
