import IUserRepository from '@interfaces/i-user-repository';
import IUserUsecase from '@usecases/models/i-users-usecase';
import IHashAdapter from '@adapters/models/i-hash-adapter';

import { Either, left, right } from '@shared/either';

import InvalidNameError from '@errors/invalid-name-error';
import InvalidPasswordError from '@errors/invalid-password-error';
import InvalidPropError from '@errors/invalid-prop-error';

import User from '@entities/user';

interface UpdateUserServiceRequest {
  id: string;
  name?: string;
  password?: string;
  location?: string;
}

export default class UpdateUserService {
  constructor(
    private readonly usersRepository: IUserRepository,
    private readonly usersUsecase: IUserUsecase,
    private readonly hashAdapter: IHashAdapter,
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

    await this.usersRepository.update(id, { name, location });

    if (password) {
      const hashedPassword = await this.hashAdapter.generateHash(password);

      await this.usersRepository.updatePassword(id, hashedPassword);

      delete user.password;
    }

    return right(user);
  }
}
