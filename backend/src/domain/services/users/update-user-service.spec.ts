import InMemoryUsersRepository from '@in-memory/in-memory-users-repository';
import UpdateUserService from './update-user-service';
import UsersUsecase from '@usecases/implementations/users-usecase';

import User from '@entities/user';

type SutOutupt = {
  usersRepository: InMemoryUsersRepository;
  sut: UpdateUserService;
};

const makeSut = (): SutOutupt => {
  const usersRepository = new InMemoryUsersRepository();
  const usersUsecase = new UsersUsecase(usersRepository);
  const sut = new UpdateUserService(usersRepository, usersUsecase);

  return { usersRepository, sut };
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
  const location = 'Somewhere Out of the Box';

  it('should be able to update the user', async () => {
    const response = await sut.handle({
      id,
      name,
      password,
      location,
    });

    expect(response.value).toBeDefined();
  });
});
