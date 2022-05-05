import IUserRepository from '@interfaces/i-user-repository';

import User from '@entities/user';

import ICheckUserDoesNotExistsUsecase from '@usecases/models/users/i-check-user-does-not-exists-usecase';

export default class DeleteUserService {
  constructor(
    private usersRepository: IUserRepository,
    private checkUserDoesNotExists: ICheckUserDoesNotExistsUsecase
  ) {}

  public async handle(id: string): Promise<User> {
    await this.checkUserDoesNotExists.run(id);

    const user = await this.usersRepository.delete(id);

    return user;
  }
}
