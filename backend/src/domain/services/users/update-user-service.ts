import IUserRepository from '@interfaces/i-user-repository';

import User from '@entities/user';

import ICheckUserDoesNotExistUsecase from '@usecases/models/users/i-check-user-does-not-exists-usecase';

interface UpdateUserServiceRequest {
  id: string;
  name?: string;
  password?: string;
  location?: string;
}

export default class UpdateUserService {
  constructor(
    private usersRepository: IUserRepository,
    private checkUserDoesNotExists: ICheckUserDoesNotExistUsecase
  ) {}

  public async handle({
    id,
    name,
    password,
    location,
  }: UpdateUserServiceRequest): Promise<User> {
    await this.checkUserDoesNotExists.run(id);

    const user = await this.usersRepository.update(id, {
      name,
      password,
      location,
    });

    return user;
  }
}
