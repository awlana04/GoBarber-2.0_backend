import IUserRepository from '@interfaces/i-user-repository';

import User from '@entities/user';

import IUserUsecase from '@usecases/models/i-users-usecase';

interface IUpdateUserAvatarServiceRequest {
  id: string;
  avatar: string;
}

export default class UpdateUserAvatarService {
  constructor(
    private readonly usersRepository: IUserRepository,
    private readonly usersUsecase: IUserUsecase
  ) {}

  public async handle({
    id,
    avatar,
  }: IUpdateUserAvatarServiceRequest): Promise<User> {
    await this.usersUsecase.checkUserDoesNotExists(id);

    const user = await this.usersRepository.updateAvatar(id, avatar);

    return user;
  }
}
