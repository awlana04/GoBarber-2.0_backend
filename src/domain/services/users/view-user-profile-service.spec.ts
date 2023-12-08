import InMemoryUsersRepository from '@in-memory/in-memory-users-repository';
import ViewUserProfileService from './view-user-profile-service';

import User from '@entities/user';

type SutOutput = {
  userRepository: InMemoryUsersRepository;
  sut: ViewUserProfileService;
};

const makeSut = (): SutOutput => {
  const userRepository = new InMemoryUsersRepository();
  const sut = new ViewUserProfileService(userRepository);

  return { userRepository, sut };
};

describe('View user profile service', () => {
  const { userRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
  }).value as User;

  userRepository.item.push(user);

  it('should be able to view the user profile', async () => {
    const response = await sut.handle(user.id);

    expect(response.id).toEqual(user.id);
    expect(response).toEqual(user);

    expect(response).toBeInstanceOf(User);
  });
});
