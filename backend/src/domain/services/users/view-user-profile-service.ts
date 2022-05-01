import User from '../../entities/modules/user';

import IUserRepository from '../../interfaces/IUserRepository';

export default class ViewUserProfileService {
  constructor(private usersRepository: IUserRepository) {}

  public async handle(id: string): Promise<User> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new Error('User does not exists');
    }

    return user;
  }
}
