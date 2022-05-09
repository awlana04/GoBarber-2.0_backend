import IUserRepository from '@interfaces/i-user-repository';

import User from '@entities/user';

import IUserUsecase from '@usecases/models/i-users-usecase';

interface UpdateUserServiceRequest {
  id: string;
  name?: string;
  password?: string;
  location?: string;
}

export default class UpdateUserService {
  constructor(
    private usersRepository: IUserRepository,
    private usersUsecase: IUserUsecase
  ) {}

  public async handle({
    id,
    name,
    password,
    location,
  }: UpdateUserServiceRequest): Promise<User> {
    await this.usersUsecase.checkUserDoesNotExists(id);

    const user = await this.usersRepository.update(id, {
      name,
      password,
      location,
    });

    return user;
  }
}
