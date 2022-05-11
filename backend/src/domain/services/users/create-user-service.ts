import { Either, left, right } from '@shared/utils/either';

import InvalidNameError from '@shared/errors/invalid-name-error';
import InvalidEmailError from '@shared/errors/invalid-email-error';
import InvalidPasswordError from '@shared/errors/invalid-password-error';

import User from '@entities/user';
import RefreshToken from '@entities/refresh-token';

import IUserRepository from '@interfaces/i-user-repository';

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
    private readonly usersRepository: IUserRepository,
    private readonly usersUsecase: IUsersUsecase,
    private readonly refreshTokenProvider: IRefreshTokenProvider
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

    await this.usersRepository.save(user);

    const refreshToken = await this.refreshTokenProvider.createRefreshToken(
      userOrError.value.id
    );

    return right({ user, refreshToken });
  }
}
