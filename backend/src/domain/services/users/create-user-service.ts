import IUserRepository from '@interfaces/i-user-repository';
import IUsersUsecase from '@usecases/models/i-users-usecase';
import IHastAdapter from '@adapters/models/i-hash-adapter';
import IDiskStorageAdapter from '@adapters/models/i-disk-storage-adapter';
import ITokenAdapter from '@adapters/models/i-token-adapter';
import IRefreshTokenProvider from '@domain/providers/models/i-refresh-token-provider';

import { Either, left, right } from '@shared/either';

import InvalidNameError from '@errors/invalid-name-error';
import InvalidEmailError from '@errors/invalid-email-error';
import InvalidPasswordError from '@errors/invalid-password-error';
import InvalidPropError from '@errors/invalid-prop-error';

import IUser from '@core/interfaces/i-user';
import IRefreshToken from '@core/interfaces/i-refresh-token';

import User from '@entities/user';

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
    private readonly hashAdapter: IHastAdapter,
    private readonly diskStorageAdapter: IDiskStorageAdapter,
    private readonly tokenAdapter: ITokenAdapter,
    private readonly refreshTokenProvider: IRefreshTokenProvider,
  ) {}

  public async handle({
    name,
    email,
    password,
    location,
    avatar,
  }: ICreateUserServiceRequest): Promise<
    Either<
      | InvalidNameError
      | InvalidEmailError
      | InvalidPasswordError
      | InvalidPropError,
      {
        user: IUser;
        token: string;
        refreshToken: IRefreshToken;
      }
    >
  > {
    await this.usersUsecase.checkUserAlreadyExists(email);

    const userOrError: Either<
      | InvalidNameError
      | InvalidEmailError
      | InvalidPasswordError
      | InvalidPropError,
      User
    > = User.create({ name, email, password, location, avatar });

    if (userOrError.isLeft()) {
      return left(userOrError.value);
    }

    const hashedPassword = await this.hashAdapter.generateHash(password);

    const filename = await this.diskStorageAdapter.saveFile(avatar);

    const user = await this.usersRepository.save({
      name,
      email,
      password: hashedPassword,
      location,
      avatar: filename,
    });

    const token = await this.tokenAdapter.createToken(user.id);

    const refreshToken = await this.refreshTokenProvider.createRefreshToken(
      user.id,
    );

    delete user.password;

    return right({ user, token, refreshToken });
  }
}
