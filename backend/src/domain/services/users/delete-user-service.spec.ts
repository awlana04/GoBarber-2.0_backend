import InMemoryUsersRepository from '@in-memory/in-memory-users-repository';
import DeleteUserService from './delete-user-service';
import UsersUsecase from '@usecases/implementations/users-usecase';

import User from '@entities/user';

type SutOutput = {
  usersRepository: InMemoryUsersRepository;
  sut: DeleteUserService;
};

const makeSut = (): SutOutput => {
  const usersRepository = new InMemoryUsersRepository();
  const usersUsecase = new UsersUsecase(usersRepository);
  const sut = new DeleteUserService(usersRepository, usersUsecase);

  return { usersRepository, sut };
};

describe('Delete user service', () => {
  const { usersRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
  }).value as User;

  usersRepository.item.push(user);

  it('should be able to delete an user', async () => {
    const response = await sut.handle(user.id);

    expect(response.id).toEqual(user.id);
    expect(response).toEqual(user);

    expect(response).toBeInstanceOf(User);
  });
});
