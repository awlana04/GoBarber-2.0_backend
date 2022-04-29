export default class InvalidPasswordError extends Error {
  public readonly password = 'InvalidPasswordError';

  constructor(password: string) {
    super('Invalid password: ' + password + '.');
  }
}
