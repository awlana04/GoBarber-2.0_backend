import InMemoryUsersRepository from '@in-memory/in-memory-users-repository';
import CreateUserService from './create-user-service';
import RefreshTokenProvider from '@domain/providers/implementations/refresh-token-provider';
import InMemoryRefreshTokenRepository from '@in-memory/in-memory-refresh-tokens-repository';
import UsersUsecase from '@usecases/implementations/users-usecase';

type SutOutput = {
  usersRepository: InMemoryUsersRepository;
  sut: CreateUserService;
};

const makeSut = (): SutOutput => {
  const usersRepository = new InMemoryUsersRepository();
  const refreshTokenRepository = new InMemoryRefreshTokenRepository();
  const refreshTokenProvider = new RefreshTokenProvider(refreshTokenRepository);
  const usersUsecase = new UsersUsecase(usersRepository);
  const sut = new CreateUserService(
    usersRepository,
    usersUsecase,
    refreshTokenProvider
  );

  return { sut, usersRepository };
};

describe('Create user service', () => {
  const { sut } = makeSut();

  it('should be able to create a new user', async () => {
    const response = await sut.handle({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
    });

    expect(response.value).toBeDefined();
  });
});
