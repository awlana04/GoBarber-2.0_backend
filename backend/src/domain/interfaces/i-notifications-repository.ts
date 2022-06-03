import Notification from '@entities/notifications';

import ICreateNotificationDTO from '../dtos/i-create-notification-dto';

export default interface INotificationsRepository {
  findByUserId(userId: string): Promise<Notification | null>;
  save(data: ICreateNotificationDTO): Promise<Notification>;
}
