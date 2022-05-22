export default class InvalidDescriptionError extends Error {
  public readonly name = 'InvalidDescriptionError';

  constructor(description: string) {
    super('Invalid description: ' + description + '.');
  }
}
