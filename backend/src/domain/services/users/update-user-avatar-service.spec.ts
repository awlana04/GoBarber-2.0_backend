import InMemoryUsersRepository from '@in-memory/in-memory-users-repository';
import UsersUsecase from '@usecases/implementations/users-usecase';
import UpdateUserAvatarService from './update-user-avatar-service';

import User from '@entities/user';

type SutOutput = {
  usersRepository: InMemoryUsersRepository;
  sut: UpdateUserAvatarService;
};

const makeSut = (): SutOutput => {
  const usersRepository = new InMemoryUsersRepository();
  const usersUsecase = new UsersUsecase(usersRepository);
  const sut = new UpdateUserAvatarService(usersRepository, usersUsecase);

  return { usersRepository, sut };
};

describe('Update user avatar service', () => {
  const { usersRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
    avatar: 'avatar.png',
  }).value as User;

  usersRepository.item.push(user);

  it('should NOT be able to update the user avatar with an invalid id', () => {
    const response = sut.handle({
      id: 'invalidID',
      avatar: 'other-avatar.png',
    });

    expect(response).rejects.toThrowError();
  });

  it('should be able to update the user avatar', async () => {
    const response = await sut.handle({
      id: user.id,
      avatar: 'other-avatar.png',
    });

    expect(response).toBeDefined();
  });
});
