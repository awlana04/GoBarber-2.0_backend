import InMemoryUsersRepository from '@in-memory/in-memory-users-repository';
import InMemoryRefreshTokenRepository from '@in-memory/in-memory-refresh-tokens-repository';
import UsersUsecase from '@usecases/implementations/users-usecase';
import RefreshTokenProvider from '@domain/providers/implementations/refresh-token-provider';
import CreateUserService from './create-user-service';

import User from '@entities/user';

type SutOutput = {
  usersRepository: InMemoryUsersRepository;
  sut: CreateUserService;
};

const makeSut = (): SutOutput => {
  const usersRepository = new InMemoryUsersRepository();
  const refreshTokenRepository = new InMemoryRefreshTokenRepository();
  const usersUsecase = new UsersUsecase(usersRepository);
  const refreshTokenProvider = new RefreshTokenProvider(refreshTokenRepository);
  const sut = new CreateUserService(
    usersRepository,
    usersUsecase,
    refreshTokenProvider
  );

  return { sut, usersRepository };
};

describe('Create user service', () => {
  const { usersRepository, sut } = makeSut();

  const name = 'John Doe';
  const email = 'john@doe.com';
  const password = '12345678';
  const location = 'Somewhere Over the Rainbow';

  it('should be able to create a new user', async () => {
    const response = await sut.handle({
      name,
      email,
      password,
      location,
    });

    expect(response.value).toBeDefined();
  });
});
