import InMemoryUsersRepository from '@in-memory/in-memory-users-repository';
import InMemoryRefreshTokenRepository from '@in-memory/in-memory-refresh-tokens-repository';
import UsersUsecase from '@usecases/implementations/users-usecase';
import CreateUserService from './create-user-service';
import RefreshTokenProvider from '@domain/providers/implementations/refresh-token-provider';

import User from '@entities/user';

type SutOutput = {
  usersRepository: InMemoryUsersRepository;
  refreshTokenProvider: RefreshTokenProvider;
  usersUsecase: UsersUsecase;
  sut: CreateUserService;
};

const makeSut = (): SutOutput => {
  const usersRepository = new InMemoryUsersRepository();
  const refreshTokenRepository = new InMemoryRefreshTokenRepository();
  const usersUsecase = new UsersUsecase(usersRepository);
  const refreshTokenProvider = new RefreshTokenProvider(refreshTokenRepository);
  const sut = new CreateUserService(usersUsecase, refreshTokenProvider);

  return { sut, refreshTokenProvider, usersUsecase, usersRepository };
};

describe('Create user service', () => {
  const { usersRepository, sut } = makeSut();

  const name = 'John Doe';
  const email = 'john@doe.com';
  const password = '12345678';
  const location = 'Somewhere Over the Rainbow';

  it('should NOT be able to create a new user with an invalid email (duplicated email)', () => {
    const user = User.create({
      name,
      email,
      password,
      location,
    }).value as User;

    usersRepository.item.push(user);

    const response = sut.handle({
      name,
      email,
      password,
      location,
    });

    expect(response).rejects.toThrowError();

    usersRepository.item.pop();
  });

  it('should be able to create a new user', async () => {
    const response = await sut.handle({
      name,
      email,
      password,
      location,
    });

    expect(response.value).toBeDefined();

    // expect(response.user.name.value).toEqual(name);
    // expect(response.user.email.value).toEqual(email);
    // expect(response.user.password.value).toEqual(password);
    // expect(response.user.props.location).toEqual(location);

    // expect(response.user).toBeInstanceOf(User);
  });
});
