import User from '@entities/user';

export default interface IUsersUsecase {
  checkUserAlreadyExists(email: string): Promise<User | null>;
  checkUserDoesNotExists(id: string): Promise<User | null>;
}
