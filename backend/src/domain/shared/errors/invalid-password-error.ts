import AppError from '../app-error';

export default class InvalidPasswordError extends AppError {
  public readonly name = 'InvalidPasswordError';

  constructor(password: string) {
    super('Invalid password: ' + password + '.');
  }
}
