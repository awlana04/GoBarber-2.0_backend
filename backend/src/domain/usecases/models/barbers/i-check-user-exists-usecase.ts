import User from '@entities/user';

export default interface ICheckUserExistsUsecase {
  run(userId: string): Promise<User | null>;
}
