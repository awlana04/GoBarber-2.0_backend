import InMemoryUsersRepository from '@in-memory/in-memory-users-repository';
import UpdateUserAvatarService from './update-user-avatar-service';
import UsersUsecase from '@usecases/implementations/user-usecase';

import User from '@entities/user';

type SutOutput = {
  userRepository: InMemoryUsersRepository;
  sut: UpdateUserAvatarService;
};

const makeSut = (): SutOutput => {
  const userRepository = new InMemoryUsersRepository();
  const usersUsecase = new UsersUsecase(userRepository);
  const sut = new UpdateUserAvatarService(userRepository, usersUsecase);

  return { userRepository, sut };
};

describe('Update user avatar service', () => {
  const { userRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
    avatar: 'avatar.png',
  }).value as User;

  userRepository.item.push(user);

  it('should be able to update the user avatar', async () => {
    const response = await sut.handle({
      id: user.id,
      avatar: 'other-avatar.png',
    });

    expect(response).toBeDefined();
  });
});
