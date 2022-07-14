import AppError from '../app-error';

export default class InvalidEmailError extends AppError {
  public readonly name = 'InvalidEmailError';

  constructor(email: string) {
    // const error = () => {
    //   throw new AppError('Invalid Email Error');
    // };

    // const valueObjectError = () => `Invalid email: ${email}.`;

    // const value = () => {
    //   if (process.env.NODE_ENV !== 'test') {
    //     return valueObjectError();
    //   }

    //   return `Invalid Email Error ${error()}`;
    // };

    // super(value());

    super('Invalid email: ' + email + '.');

    if (process.env.NODE_ENV !== 'test') {
      throw new AppError('Invalid Email Error');
    }
  }
}
