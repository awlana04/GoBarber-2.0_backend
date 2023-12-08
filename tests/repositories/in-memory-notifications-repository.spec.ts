import InMemoryNotificationsRepository from './in-memory-notifications-repository';

import User from '@entities/user';
import Notification from '@entities/notifications';

describe('In memory notifications repository', () => {
  const notificationRepository = new InMemoryNotificationsRepository();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
    avatar: 'avatar.png',
  }).value as User;

  notificationRepository.user.push(user);

  it('should be able to find an user id', async () => {
    const response = await notificationRepository.findByUserId(user.id);

    expect(response).toBeDefined();
  });

  it('should be able to save a notification', async () => {
    const response = await notificationRepository.save({
      title: 'Welcome',
      message: 'Welcome to GoBarber-2.0!',
      isViewed: false,
      userId: user.id,
    });

    expect(response).toBeDefined();
  });
});
