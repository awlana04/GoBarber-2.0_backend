import InMemoryUsersRepository from '@in-memory/in-memory-users-repository';
import UserUsecase from '@usecases/implementations/user-usecase';
import HashAdapter from '@adapters/implementations/hash-adapter';
import DiskStorageAdapter from '@adapters/implementations/disk-storage-adapter';
import TokenAdapter from '@adapters/implementations/token-adapter';
import InMemoryRefreshTokenRepository from '@in-memory/in-memory-refresh-tokens-repository';
import ExpiresInDateAdapter from '@adapters/implementations/expires-in-date-adapter';
import RefreshTokenProvider from '@domain/providers/implementations/refresh-token-provider';
import CreateUserService from './create-user-service';

type SutOutput = {
  sut: CreateUserService;
};

const makeSut = (): SutOutput => {
  const userRepository = new InMemoryUsersRepository();
  const refreshTokenRepository = new InMemoryRefreshTokenRepository();
  const hashAdapter = new HashAdapter();
  const diskStorageAdapter = new DiskStorageAdapter();
  const tokenAdpater = new TokenAdapter();
  const expiresInDateAdapter = new ExpiresInDateAdapter();
  const refreshTokenProvider = new RefreshTokenProvider(
    refreshTokenRepository,
    expiresInDateAdapter
  );
  const usersUsecase = new UserUsecase(userRepository);
  const sut = new CreateUserService(
    userRepository,
    usersUsecase,
    hashAdapter,
    diskStorageAdapter,
    tokenAdpater,
    refreshTokenProvider
  );

  return { sut };
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
