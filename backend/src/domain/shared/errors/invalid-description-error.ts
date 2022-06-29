import AppError from '../app-error';

export default class InvalidDescriptionError extends AppError {
  public readonly name = 'InvalidDescriptionError';

  constructor(description: string) {
    super('Invalid description: ' + description + '.');
    {
      throw new AppError('Invalid description error');
    }
  }
}
