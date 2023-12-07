import INotificationsUsecase from '../models/i-notifications-usecase';

import INotificationsRepository from '@domain/dtos/interfaces/i-notifications-repository';

import User from '@entities/user';

export default class NotificationsUsecase implements INotificationsUsecase {
  constructor(private notificationsRepository: INotificationsRepository) {}

  public async checkUserExists(userId: string): Promise<User | null> {
    const user = await this.notificationsRepository.findByUserId(userId);

    if (!user) {
      throw new Error('User does not exists');
    }

    return null;
  }
}
