import User from '@entities/user';

export default interface ICheckUserAlreadyExistsUsecase {
  run(email: string): Promise<User | null>;
}
