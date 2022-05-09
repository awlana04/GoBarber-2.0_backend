import IUserRepository from '@interfaces/i-user-repository';

import User from '@entities/user';

import IUsersUsecase from '@usecases/models/i-users-usecase';

export default class DeleteUserService {
  constructor(
    private usersRepository: IUserRepository,
    private usersUsecase: IUsersUsecase
  ) {}

  public async handle(id: string): Promise<User> {
    await this.usersUsecase.checkUserDoesNotExists(id);

    const user = await this.usersRepository.delete(id);

    return user;
  }
}
