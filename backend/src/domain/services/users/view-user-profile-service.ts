import IUserRepository from '@interfaces/i-user-repository';

import IUser from '@core/interfaces/i-user';

export default class ViewUserProfileService {
  constructor(private readonly usersRepository: IUserRepository) {}

  public async handle(id: string): Promise<IUser> {
    const user = await this.usersRepository.findById(id);

    if (!user) {
      throw new Error('User does not exists');
    }

    delete user.password;

    return user;
  }
}
