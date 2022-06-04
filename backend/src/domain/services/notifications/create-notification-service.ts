import INotificationsRepository from '@interfaces/i-notifications-repository';
import INotificationsUsecase from '@usecases/models/i-notifications-usecase';

import Notification from '@entities/notifications';

interface ICreateNotificationServiceRequest {
  title: string;
  message: string;
  isViewed: boolean;
  userId: string;
}

export default class CreateNotificationService {
  constructor(
    private notificationsRepository: INotificationsRepository,
    private notificationsUsecase: INotificationsUsecase
  ) {}

  public async handle({
    title,
    message,
    isViewed,
    userId,
  }: ICreateNotificationServiceRequest) {
    await this.notificationsUsecase.checkUserExists(userId);

    const notifications = Notification.create({
      title,
      message,
      isViewed,
      userId,
    });

    await this.notificationsRepository.save({
      title,
      message,
      isViewed,
      userId,
    });

    return notifications;
  }
}
