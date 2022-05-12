import IUserRepository from '@interfaces/i-user-repository';

import User from '@entities/user';

import IUserUsecase from '@usecases/models/i-users-usecase';

interface UpdateUserServiceRequest {
  id: string;
  name?: string;
  password?: string;
}

export default class UpdateUserService {
  constructor(
    private readonly usersRepository: IUserRepository,
    private readonly usersUsecase: IUserUsecase
  ) {}

  public async handle({
    id,
    name,
    password,
  }: UpdateUserServiceRequest): Promise<User | {}> {
    await this.usersUsecase.checkUserDoesNotExists(id);

    const user = User.update(id, {
      name,
      password,
    }).value;

    return user;
  }
}
