import InMemoryUsersRepository from '../../../tests/repositories/InMemoryUsersRepository';
import User from '../entities/user';

import UpdateUserService from './update-user-service';

type SutOutupt = {
  usersRepository: InMemoryUsersRepository;
  sut: UpdateUserService;
};

const makeSut = (): SutOutupt => {
  const usersRepository = new InMemoryUsersRepository();
  const sut = new UpdateUserService(usersRepository);

  return { usersRepository, sut };
};

describe('Update user service', () => {
  it('should be able to update the user', async () => {
    const { usersRepository, sut } = makeSut();

    const user = User.create({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
    });

    usersRepository.item.push(user);

    const response = await sut.handle({
      id: user.id,
      name: 'John Doe Junior',
      password: '12345678910',
      location: 'Somewhere Over the Sun',
    });

    expect(response).toBeDefined();
  });
});
