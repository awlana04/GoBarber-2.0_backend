import Notification from '@entities/notifications';

export default interface INotificationsRepository {
  findByUserId(userId: string): Promise<Notification | null>;
  save(notification: Notification): Promise<Notification>;
}
