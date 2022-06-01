export default class InvalidCommentError extends Error {
  public readonly name = 'InvalidCommentError';

  constructor(comment: string) {
    super('Invalid comment: ' + comment + '.');
  }
}
