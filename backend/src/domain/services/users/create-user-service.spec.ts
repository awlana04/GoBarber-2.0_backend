import InMemoryUsersRepository from '../../../../tests/repositories/InMemoryUsersRepository';
import CreateUserService from './create-user-service';

import User from '../../entities/user';

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
  it('should be able to create a new user', async () => {
    const { sut } = makeSut();

    const response = await sut.handle({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
    });

    expect(response).toBeInstanceOf(User);
  });

  it('should NOT be able to create a new user with an invalid email', () => {
    const { usersRepository, sut } = makeSut();

    const user = User.create({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
    });

    usersRepository.item.push(user);

    const response = sut.handle({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
    });

    expect(response).rejects.toThrowError();
  });

  it('should NOT be able to create a new user with an invalid password', () => {
    const { sut } = makeSut();

    const user = sut.handle({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '1234567',
      location: 'Somewhere Over the Rainbow',
    });

    expect(user).rejects.toThrowError();
  });
});
