import IUserRepository from '@interfaces/i-user-repository';

import User from '@entities/user';

export default class ViewUserProfileService {
  constructor(private readonly usersRepository: IUserRepository) {}

  public async handle(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new Error('User does not exists');
    }

    return user;
  }
}
