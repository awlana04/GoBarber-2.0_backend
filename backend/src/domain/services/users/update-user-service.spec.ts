import InMemoryUsersRepository from '@in-memory/in-memory-users-repository';
import UsersUsecase from '@usecases/implementations/users-usecase';
import UpdateUserService from './update-user-service';

import User from '@entities/user';

type SutOutupt = {
  usersRepository: InMemoryUsersRepository;
  usersUsecase: UsersUsecase;
  sut: UpdateUserService;
};

const makeSut = (): SutOutupt => {
  const usersRepository = new InMemoryUsersRepository();
  const usersUsecase = new UsersUsecase(usersRepository);
  const sut = new UpdateUserService(usersRepository, usersUsecase);

  return { usersRepository, usersUsecase, sut };
};

describe('Update user service', () => {
  const { usersRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
  }).value as User;

  usersRepository.item.push(user);

  const id = user.id;
  const name = 'John Doe Junior';
  const password = '12345678910';

  it('should NOT be able to update the user with invalid id', async () => {
    const response = sut.handle({
      id: 'invalidID',
      name,
      password,
    });

    expect(response).rejects.toThrowError();
  });

  it('should be able to update the user name', async () => {
    const response = await sut.handle({
      id,
      name: 'John Doe Junior',
    });

    expect(response).toBeDefined();
  });

  it('should be able to update the user password', async () => {
    const response = await sut.handle({
      id,
      password,
    });

    expect(response).toBeDefined();
  });

  it('should be able to update the user', async () => {
    const response = await sut.handle({
      id,
      name,
      password,
    });

    expect(response.name.value).toEqual(name);
    expect(response.password.value).toEqual(password);
  });
});
