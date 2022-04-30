import InMemoryUsersRepository from '../../../../tests/repositories/InMemoryUsersRepository';
import UpdateUserService from './update-user-service';

import User from '../../entities/modules/user';

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
  const location = 'Somewhere Over the Sun';

  it('should NOT be able to update the user with invalid id', async () => {
    const response = sut.handle({
      id: 'invalidID',
      name,
      password,
      location,
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

  it('should be able to update the user location', async () => {
    const response = await sut.handle({
      id,
      location,
    });

    expect(response).toBeDefined();
  });

  it('should be able to update the user', async () => {
    const response = await sut.handle({
      id,
      name,
      password,
      location,
    });

    expect(response).toBeDefined();
  });
});
