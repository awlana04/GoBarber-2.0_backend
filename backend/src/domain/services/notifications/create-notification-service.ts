import INotificationsRepository from '@domain/interfaces/i-notifications-repository';

import Notification from '@entities/notifications';

interface ICreateNotificationServiceRequest {
  title: string;
  message: string;
  isViewed: boolean;
  userId: string;
}

export default class CreateNotificationService {
  constructor(private notificationsRepository: INotificationsRepository) {}

  public async handle({
    title,
    message,
    isViewed,
    userId,
  }: ICreateNotificationServiceRequest) {
    const user = await this.notificationsRepository.findByUserId(userId);

    if (!user) {
      throw new Error('User does not exists');
    }

    const notifications = Notification.create({
      title,
      message,
      isViewed,
      userId,
    });

    await this.notificationsRepository.save(notifications);

    return notifications;
  }
}
