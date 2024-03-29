import AppError from '../app-error';

export default class InvalidCommentError extends AppError {
  public readonly name = 'InvalidCommentError';

  constructor(comment: string) {
    super('Invalid comment: ' + comment + '.');

    if (process.env.NODE_ENV !== 'test') {
      throw new AppError('Invalid Comment Error');
    }
  }
}
