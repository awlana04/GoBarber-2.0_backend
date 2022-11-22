import InMemoryUsersRepository from '@in-memory/in-memory-users-repository';
import UpdateUserService from './update-user-service';
import UserUsecase from '@usecases/implementations/user-usecase';
import HashAdapter from '@adapters/implementations/hash-adapter';

import User from '@entities/user';

type SutOutupt = {
  userRepository: InMemoryUsersRepository;
  sut: UpdateUserService;
};

const makeSut = (): SutOutupt => {
  const userRepository = new InMemoryUsersRepository();
  const usersUsecase = new UserUsecase(userRepository);
  const hashAdapter = new HashAdapter();

  const sut = new UpdateUserService(userRepository, usersUsecase, hashAdapter);

  return { userRepository, sut };
};

describe('Update user service', () => {
  const { userRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
  }).value as User;

  userRepository.item.push(user);

  it('should be able to update the user', async () => {
    const response = await sut.handle({
      id: user.id,
      name: 'John Doe Junior',
      password: '12345678910',
      location: 'Somewhere Out of the Box',
    });

    expect(response.value).toBeDefined();
  });
});
