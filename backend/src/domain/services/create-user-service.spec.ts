import InMemoryUsersRepository from '../../../tests/repositories/InMemoryUsersRepository';

import CreateUserService from './create-user-service';

import User from '../entities/user';

type SutOutput = {
  sut: CreateUserService;
  usersRepository: InMemoryUsersRepository;
};

const makeSut = (): SutOutput => {
  const usersRepository = new InMemoryUsersRepository();
  const sut = new CreateUserService(usersRepository);

  return { sut, usersRepository };
};

describe('Create user service', () => {
  it('should be able to create a new user', async () => {
    const { sut, usersRepository } = makeSut();

    const user = User.create({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
    });

    usersRepository.item.push(user);

    const response = await sut.handle({
      name: user.props.name,
      email: user.props.email,
      password: user.props.password,
      location: user.props.location,
    });

    expect(response).toBeTruthy();
  });
});
