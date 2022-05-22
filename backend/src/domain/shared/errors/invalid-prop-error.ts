export default class InvalidPropError extends Error {
  public readonly name = 'InvalidPropError';

  constructor(prop: string) {
    super('Invalid prop: ' + prop + '.');
  }
}
