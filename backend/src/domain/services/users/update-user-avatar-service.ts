import User from '../../entities/modules/user';

import IUserRepository from '../../interfaces/IUserRepository';

interface IUpdateUserAvatarServiceRequest {
  id: string;
  avatar: string;
}

export default class UpdateUserAvatarService {
  constructor(private usersRepository: IUserRepository) {}

  public async handle({
    id,
    avatar,
  }: IUpdateUserAvatarServiceRequest): Promise<User> {
    const checkUserExists = await this.usersRepository.findById(id);

    if (!checkUserExists) {
      throw new Error('User does not exists');
    }

    const user = await this.usersRepository.updateAvatar(id, avatar);

    return user;
  }
}
