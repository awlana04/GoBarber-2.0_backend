import InMemoryUsersRepository from '../../../../tests/repositories/InMemoryUsersRepository';
import CreateUserService from './create-user-service';

import User from '../../entities/modules/user';

type SutOutput = {
  usersRepository: InMemoryUsersRepository;
  sut: CreateUserService;
};

const makeSut = (): SutOutput => {
  const usersRepository = new InMemoryUsersRepository();
  const sut = new CreateUserService(usersRepository);

  return { sut, usersRepository };
};

describe('Create user service', () => {
  const name = 'John Doe';
  const email = 'john@doe.com';
  const password = '12345678';
  const location = 'Somewhere Over the Rainbow';

  it('should be able to create a new user', async () => {
    const { sut } = makeSut();

    const response = await sut.handle({
      name,
      email,
      password,
      location,
    });

    expect(response).toBeInstanceOf(User);
  });

  it('should NOT be able to create a new user with an invalid email', () => {
    const { usersRepository, sut } = makeSut();

    const user = User.create({
      name,
      email,
      password,
      location: 'Somewhere Over the Rainbow',
    }).value as User;

    usersRepository.item.push(user);

    const response = sut.handle({
      name,
      email,
      password,
      location,
    });

    expect(response).toBeTruthy();
  });

  it('should NOT be able to create a new user with an invalid password', () => {
    const { sut } = makeSut();

    const user = sut.handle({
      name,
      email,
      password: '1234567',
      location,
    });

    expect(user).rejects.toThrowError();
  });
});
