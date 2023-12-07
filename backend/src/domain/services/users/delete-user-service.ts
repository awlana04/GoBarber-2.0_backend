import IUserRepository from '@interfaces/i-user-repository';
import IUsersUsecase from '@usecases/models/i-users-usecase';

import IUser from '@core/interfaces/i-user';

export default class DeleteUserService {
  constructor(
    private readonly usersRepository: IUserRepository,
    private readonly usersUsecase: IUsersUsecase,
  ) {}

  public async handle(id: string): Promise<IUser> {
    await this.usersUsecase.checkUserDoesNotExists(id);

    const user = await this.usersRepository.delete(id);

    delete user.password;

    return user;
  }
}
