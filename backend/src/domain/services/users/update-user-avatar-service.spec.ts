import InMemoryUsersRepository from '../../../../tests/repositories/InMemoryUsersRepository';
import UpdateUserAvatarService from './update-user-avatar-service';

import User from '../../entities/user';

type SutOutput = {
  usersRepository: InMemoryUsersRepository;
  sut: UpdateUserAvatarService;
};

const makeSut = (): SutOutput => {
  const usersRepository = new InMemoryUsersRepository();
  const sut = new UpdateUserAvatarService(usersRepository);

  return { usersRepository, sut };
};

describe('Update user avatar service', () => {
  it('should be able to update the user avatar', async () => {
    const { usersRepository, sut } = makeSut();

    const user = User.create({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
      avatar: 'avatar.png',
    });

    usersRepository.item.push(user);

    const response = await sut.handle({
      id: user.id,
      avatar: 'other-avatar.png',
    });

    expect(response).toBeDefined();
  });

  it('should NOT be able to update the user avatar with an invalid id', () => {
    const { usersRepository, sut } = makeSut();

    const user = User.create({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
      avatar: 'avatar.png',
    });

    usersRepository.item.push(user);

    const response = sut.handle({
      id: 'invalidID',
      avatar: 'othe-avatar.png',
    });

    expect(response).rejects.toThrowError();
  });
});
