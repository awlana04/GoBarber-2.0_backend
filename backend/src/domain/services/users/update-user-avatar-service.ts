import IUserRepository from '@interfaces/i-user-repository';

import User from '@entities/user';

import ICheckUserDoesNotExistsUsecase from '../../usecases/models/i-check-user-does-not-exsits-usecase';

interface IUpdateUserAvatarServiceRequest {
  id: string;
  avatar: string;
}

export default class UpdateUserAvatarService {
  constructor(
    private usersRepository: IUserRepository,
    private checkUserDoesNotExists: ICheckUserDoesNotExistsUsecase
  ) {}

  public async handle({
    id,
    avatar,
  }: IUpdateUserAvatarServiceRequest): Promise<User> {
    await this.checkUserDoesNotExists.run(id);

    const user = await this.usersRepository.updateAvatar(id, avatar);

    return user;
  }
}
