import InMemoryUsersRepository from '@in-memory/in-memory-users-repository';
import UserUsecase from '@usecases/implementations/user-usecase';
import HashAdapter from '@adapters/implementations/hash-adapter';
import TokenAdapter from '@adapters/implementations/token-adapter';
import RefreshTokenRepository from '@repositories/refresh-token-repository';
import ExpiresInDateAdapter from '@adapters/implementations/expires-in-date-adapter';
import RefreshTokenProvider from '@domain/providers/implementations/refresh-token-provider';
import AuthenticateUserService from './authenticate-user-service';

import User from '@entities/user';

const makeSut = () => {
  const userRepository = new InMemoryUsersRepository();
  const hashAdapter = new HashAdapter();
  const tokenAdapter = new TokenAdapter();
  const refreshTokenRepository = new RefreshTokenRepository();
  const expiresInDateAdapter = new ExpiresInDateAdapter();
  const refreshTokenProvider = new RefreshTokenProvider(
    refreshTokenRepository,
    expiresInDateAdapter
  );
  const sut = new AuthenticateUserService(
    userRepository,
    hashAdapter,
    tokenAdapter,
    refreshTokenProvider
  );

  return { sut, userRepository };
};

describe('Authenticate user service', () => {
  const { sut, userRepository } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
  }).value as User;

  userRepository.item.push(user);

  it('should be able to authenticate the user', async () => {
    const response = await sut.handle({
      email: 'john@doe.com',
      password: '12345678',
    });

    console.log(response);

    expect(response.user).toBeDefined();
  });
});
