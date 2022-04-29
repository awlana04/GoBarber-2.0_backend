import User from './user';

describe('User entity', () => {
  const name = 'John Doe';
  const email = 'john@doe.com';
  const password = '12345678';
  const location = 'Somewhere Over the Rainbow';
  const avatar = 'avatar.png';

  it('should NOT be able to create a new user with invalid name (too few characters)', () => {
    const invalidName = 'a';

    const response = User.create({
      name: invalidName,
      email,
      password,
      location,
      avatar,
    }).value as Error;

    expect(response.name).toEqual('InvalidNameError');
    expect(response.message).toEqual('Invalid name: ' + invalidName + '.');
  });

  it('should NOT be able to create a new user with invalid name (too many characters)', () => {
    // const invalidName =
    //   'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

    const invalidName = 'a'.repeat(129);

    const response = User.create({
      name: invalidName,
      email,
      password,
      location,
      avatar,
    }).value as Error;

    expect(response.name).toEqual('InvalidNameError');
    expect(response.message).toEqual('Invalid name: ' + invalidName + '.');
  });

  it('should NOT be able to create a new user with invalid email', () => {
    const invalidEmail = 'InvalidEmail';

    const response = User.create({
      name,
      email: invalidEmail,
      password,
      location,
      avatar,
    }).value as Error;

    expect(response.name).toEqual('InvalidEmailError');
    expect(response.message).toEqual('Invalid email: ' + invalidEmail + '.');
  });

  it('should NOT be able to create a new user with invalid password (too few characters)', () => {
    const invalidPassword = '123';

    const response = User.create({
      name,
      email,
      password: invalidPassword,
      location,
      avatar,
    }).value as Error;

    expect(response.name).toEqual('InvalidPasswordError');
    expect(response.message).toEqual(
      'Invalid password: ' + invalidPassword + '.'
    );
  });

  it('should NOT be able to create a new user with invalid password (too many characters)', () => {
    const invalidPassword = '123'.repeat(128);

    const response = User.create({
      name,
      email,
      password: invalidPassword,
      location,
      avatar,
    }).value as Error;

    expect(response.name).toEqual('InvalidPasswordError');
    expect(response.message).toEqual(
      'Invalid password: ' + invalidPassword + '.'
    );
  });

  it('should be able to create a new user', () => {
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
