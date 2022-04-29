export default class InvalidPasswordError extends Error {
  public readonly name = 'InvalidPasswordError';

  constructor(password: string) {
    super('Invalid password: ' + password + '.');
  }
}
