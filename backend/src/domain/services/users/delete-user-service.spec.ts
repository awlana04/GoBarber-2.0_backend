import InMemoryUsersRepository from '@in-memory/in-memory-users-repository';
import DeleteUserService from './delete-user-service';
import UsersUsecase from '@usecases/implementations/user-usecase';

import User from '@entities/user';

type SutOutput = {
  userRepository: InMemoryUsersRepository;
  sut: DeleteUserService;
};

const makeSut = (): SutOutput => {
  const userRepository = new InMemoryUsersRepository();
  const userUsecase = new UsersUsecase(userRepository);
  const sut = new DeleteUserService(userRepository, userUsecase);

  return { userRepository, sut };
};

describe('Delete user service', () => {
  const { userRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
  }).value as User;

  userRepository.item.push(user);

  it('should be able to delete an user', async () => {
    const response = await sut.handle(user.id);

    expect(response.id).toEqual(user.id);
    expect(response).toEqual(user);

    expect(response).toBeInstanceOf(User);
  });
});
