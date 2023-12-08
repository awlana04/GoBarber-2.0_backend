import User from '@entities/user';

export default interface INotificationsUsecase {
  checkUserExists(userId: string): Promise<User | null>;
}
