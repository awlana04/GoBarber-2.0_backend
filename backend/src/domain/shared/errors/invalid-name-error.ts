import AppError from '../app-error';

export default class InvalidNameError extends AppError {
  public readonly name = 'InvalidNameError';

  constructor(name: string) {
    super('Invalid name: ' + name + '.');
    {
      throw new AppError('Invalid name error');
    }
  }
}
