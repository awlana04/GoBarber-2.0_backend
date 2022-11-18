export default class InvalidDatetimeError extends Error {
  public readonly name = 'InvalidDatetimeError';

  constructor(datetime: Date) {
    super('Invalid datetime: ' + datetime + '.');
  }
}
