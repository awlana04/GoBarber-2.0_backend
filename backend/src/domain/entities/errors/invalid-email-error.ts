export default class InvalidEmailError extends Error {
  public readonly email = 'InvalidEmailError';

  constructor(email: string) {
    super('Invalid email: ' + email + '.');
  }
}
