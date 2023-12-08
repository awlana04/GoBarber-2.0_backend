import IUserRepository from '@interfaces/i-user-repository';
import IUserUsecase from '@usecases/models/i-users-usecase';

import IUser from '@core/interfaces/i-user';

interface IUpdateUserAvatarServiceRequest {
  id: string;
  avatar: string;
}

export default class UpdateUserAvatarService {
  constructor(
    private readonly usersRepository: IUserRepository,
    private readonly usersUsecase: IUserUsecase,
  ) {}

  public async handle({
    id,
    avatar,
  }: IUpdateUserAvatarServiceRequest): Promise<IUser> {
    await this.usersUsecase.checkUserDoesNotExists(id);

    const user = await this.usersRepository.updateAvatar(id, avatar);

    delete user.password;

    return user;
  }
}
