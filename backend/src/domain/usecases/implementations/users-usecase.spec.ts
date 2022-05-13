import InMemoryUsersRepository from '@in-memory/in-memory-users-repository';
import UsersUsecase from './users-usecase';

import User from '@entities/user';

type SutOutput = {
  usersRepository: InMemoryUsersRepository;
  sut: UsersUsecase;
};

const makeSut = (): SutOutput => {
  const usersRepository = new InMemoryUsersRepository();
  const sut = new UsersUsecase(usersRepository);

  return { usersRepository, sut };
};

describe('Users usecase', () => {
  const { usersRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
  }).value as User;

  usersRepository.item.push(user);

  it('should be able to find an user which exists', () => {
    const response = sut.checkUserAlreadyExists(user.email.value);

    expect(response).rejects.toThrowError();
  });

  it('should not be able to find an user which exists', async () => {
    const response = await sut.checkUserAlreadyExists('');

    expect(response).toBeNull();
  });

  it('should not be able to find an user that not exists', () => {
    const response = sut.checkUserDoesNotExists('');

    expect(response).rejects.toThrowError();
  });

  it('should be able to find an user', async () => {
    const response = await sut.checkUserDoesNotExists(user.id);

    expect(response).toBeNull();
  });
});
