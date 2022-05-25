import User from './user';

describe('User entity', () => {
  it('should be able to update the user name', () => {
    const name = 'John Doe Junior';

    const response = User.update({ name }).value as User;

    expect(response.name.value).toEqual(name);
  });

  it('should be able to update the user password', () => {
    const password = '12345678910';

    const response = User.update({ password }).value as User;

    expect(response.password.value).toEqual(password);
  });

  it('should be able to update the user', () => {
    const name = 'John Doe Junior';
    const password = '12345678910';

    const response = User.update({ name, password }).value as User;

    expect(response.name.value).toEqual(name);
    expect(response.password.value).toEqual(password);
  });

  it('should be able to create a new user', () => {
    const name = 'John Doe';
    const email = 'john@doe.com';
    const password = '12345678';
    const location = 'Somewhere Over the Rainbow';
    const avatar = 'avatar.png';

    const response = User.create({
      name,
      email,
      password,
      location,
      avatar,
    }).value as User;

    expect(response.name.value).toEqual(name);
    expect(response.email.value).toEqual(email);
    expect(response.password.value).toEqual(password);
    expect(response.props.location).toEqual(location);
    expect(response.props.avatar).toEqual(avatar);

    expect(response).toBeInstanceOf(User);
  });
});
