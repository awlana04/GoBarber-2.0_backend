import AppError from '../app-error';

export default class InvalidCommentError extends AppError {
  public readonly name = 'InvalidCommentError';

  constructor(comment: string) {
    super('Invalid comment: ' + comment + '.');
    {
      throw new AppError('Invalod comment error');
    }
  }
}
