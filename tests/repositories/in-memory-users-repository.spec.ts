import InMemoryUsersRepository from './in-memory-users-repository';

import User from '@entities/user';

describe('In memory users repository', () => {
  const userRepository = new InMemoryUsersRepository();

  const name = 'John Doe';
  const email = 'john@doe.com';
  const password = '12345678';
  const location = 'Somewhere Over the Rainbow';
  const avatar = 'avatar.png';

  const user = User.create({
    name,
    email,
    password,
    location,
  }).value as User;

  userRepository.item.push(user);

  it('it should be able to find an user by id', async () => {
    const response = await userRepository.findById(user.id);

    expect(response!.id).toEqual(user.id);
  });

  it('it should be able to find an user by email', async () => {
    const response = await userRepository.findByEmail(user.email.value);

    expect(response!.email.value).toEqual(user.email.value);
  });

  it('should be able to save an user', async () => {
    const response = await userRepository.save({
      name,
      email,
      password,
      location,
      avatar,
    });

    expect(response).toBeDefined();
  });

  it('should be able to update an user', async () => {
    const response = await userRepository.update(user.id, {
      name: 'John Doe Junior',
      password: '12345678910',
      location: 'Somewhere Out of the Box',
    });

    expect(response).toBeDefined();
  });

  it('should be able to update an user avatar', async () => {
    const response = await userRepository.updateAvatar(
      user.id,
      'other-avatar.png'
    );

    expect(response).toBeDefined();
  });

  it('should be able to delete an user', async () => {
    const response = await userRepository.delete(user.id);

    expect(response).toBeDefined();
  });
});
