import InMemoryUsersRepository from '../../../tests/repositories/InMemoryUsersRepository';

import CreateUserService from './create-user-service';

import User from '../entities/user';

describe('Create user service', () => {
  it('should be able to create a new user', async () => {
    const usersRepository = new InMemoryUsersRepository();
    const createUser = new CreateUserService(usersRepository);

    const user = User.create({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
    });

    usersRepository.item.push(user);

    const response = await createUser.handle({
      name: user.props.name,
      email: user.props.email,
      password: user.props.password,
      location: user.props.location,
    });

    expect(response).toBeTruthy();
  });
});
