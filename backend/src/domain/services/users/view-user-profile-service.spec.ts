import InMemoryUsersRepository from '../../../../tests/repositories/InMemoryUsersRepository';
import ViewUserProfileService from './view-user-profile-service';

import User from '../../entities/modules/user';

type SutOutput = {
  usersRepository: InMemoryUsersRepository;
  sut: ViewUserProfileService;
};

const makeSut = (): SutOutput => {
  const usersRepository = new InMemoryUsersRepository();
  const sut = new ViewUserProfileService(usersRepository);

  return { usersRepository, sut };
};

describe('View user profile service', () => {
  const { usersRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
  }).value as User;

  usersRepository.item.push(user);

  it('should NOT be able to view the user profile with an invalid id', () => {
    const response = sut.handle('invalidId');

    expect(response).rejects.toThrowError();
  });

  it('should be able to view the user profile', async () => {
    const response = await sut.handle(user.id);

    expect(response.id).toEqual(user.id);
    expect(response).toEqual(user);

    expect(response).toBeInstanceOf(User);
  });
});
