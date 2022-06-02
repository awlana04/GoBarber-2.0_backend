import IUserRepository from '@interfaces/i-user-repository';

import { Either, left, right } from '@shared/utils/either';

import InvalidNameError from '@shared/errors/invalid-name-error';
import InvalidPasswordError from '@shared/errors/invalid-password-error';
import InvalidPropError from '@shared/errors/invalid-prop-error';

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
    private readonly usersRepository: IUserRepository,
    private readonly usersUsecase: IUserUsecase
  ) {}

  public async handle({
    id,
    name,
    password,
    location,
  }: UpdateUserServiceRequest): Promise<
    Either<InvalidNameError | InvalidPasswordError | InvalidPropError, User>
  > {
    await this.usersUsecase.checkUserDoesNotExists(id);

    const userOrError: Either<
      InvalidNameError | InvalidPasswordError | InvalidPropError,
      User
    > = User.update({
      name,
      password,
      location,
    });

    if (userOrError.isLeft()) {
      return left(userOrError.value);
    }

    const user: User = userOrError.value as User;

    await this.usersRepository.update(id, { name, password, location });

    return right(user);
  }
}
