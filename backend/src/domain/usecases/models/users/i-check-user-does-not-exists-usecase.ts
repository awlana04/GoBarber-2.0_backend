import User from '@entities/user';

export default interface ICheckUserDoesNotExsitsUsecase {
  run(id: string): Promise<User | null>;
}
