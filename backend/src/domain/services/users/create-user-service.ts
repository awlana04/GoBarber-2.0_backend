import { Either, left, right } from '../../shared/either';

import InvalidNameError from '@domain/entities/errors/invalid-name-error';
import InvalidEmailError from '@domain/entities/errors/invalid-email-error';
import InvalidPasswordError from '@domain/entities/errors/invalid-password-error';

import User from '@entities/user';
import RefreshToken from '@domain/entities/modules/refresh-token';

import IUsersUsecase from '@usecases/models/i-users-usecase';

import IRefreshTokenProvider from '@domain/providers/models/i-refresh-token-provider';

interface ICreateUserServiceRequest {
  name: string;
  email: string;
  password: string;
  location: string;
  avatar?: string;
}

export default class CreateUserService {
  constructor(
    private usersUsecase: IUsersUsecase,
    private refreshTokenProvider: IRefreshTokenProvider
  ) {}

  public async handle({
    name,
    email,
    password,
    location,
    avatar,
  }: ICreateUserServiceRequest): Promise<
    Either<
      InvalidNameError | InvalidEmailError | InvalidPasswordError,
      {
        user: User;
        refreshToken: RefreshToken;
      }
    >
  > {
    await this.usersUsecase.checkUserAlreadyExists(email);

    const userOrError: Either<
      InvalidNameError | InvalidEmailError | InvalidPasswordError,
      User
    > = User.create({ name, email, password, location, avatar });

    if (userOrError.isLeft()) {
      return left(userOrError.value);
    }

    const user: User = userOrError.value as User;

    const refreshToken = await this.refreshTokenProvider.createRefreshToken(
      userOrError.value.id
    );

    return right({ user, refreshToken });
  }
}
