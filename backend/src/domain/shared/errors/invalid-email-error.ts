import AppError from '../app-error';

export default class InvalidEmailError extends AppError {
  public readonly name = 'InvalidEmailError';

  constructor(email: string) {
    super('Invalid email: ' + email + '.');
  }
}
