import AppError from '../app-error';

export default class InvalidDatetimeError extends Error {
  public readonly name = 'InvalidDatetimeError';

  constructor(datetime: Date) {
    super('Invalid datetime: ' + datetime + '.');

    if (process.env.NODE_ENV !== 'test') {
      throw new AppError('Invalid Datetime Error');
    }
  }
}
