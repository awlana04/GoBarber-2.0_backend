import INotificationsRepository from '@domain/interfaces/i-notifications-repository';

import User from '@entities/user';
import Notification from '@entities/notifications';

export default class InMemoryNotificationsRepository
  implements INotificationsRepository
{
  public user: User[] = [];
  public notification: Notification[] = [];

  async findByUserId(userId: string): Promise<Notification | null> {
    const notification = this.notification.find(
      notification => notification.props.userId === userId
    );

    if (!notification) {
      return null;
    }

    return notification;
  }

  async save(notification: Notification): Promise<Notification | any> {
    return this.notification.push(notification);
  }
}
