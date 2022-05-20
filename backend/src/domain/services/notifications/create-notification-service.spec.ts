import InMemoryNotificationsRepository from '@in-memory/in-memory-notifications-repository';
import NotificationsUsecase from '@usecases/implementations/notifications-usecase';
import CreateNotificationService from './create-notification-service';

import User from '@entities/user';

type SutOutput = {
  notificationsRepository: InMemoryNotificationsRepository;
  sut: CreateNotificationService;
};

const makeSut = (): SutOutput => {
  const notificationsRepository = new InMemoryNotificationsRepository();
  const notificationsUsecase = new NotificationsUsecase(
    notificationsRepository
  );

  const sut = new CreateNotificationService(
    notificationsRepository,
    notificationsUsecase
  );

  return { notificationsRepository, sut };
};

describe('Create notification', () => {
  const { notificationsRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
  }).value as User;

  notificationsRepository.user.push(user);

  it('should be able to find a notification', async () => {
    const response = await sut.handle({
      title: 'Welcome',
      message: 'Welcome to GoBarber-2.0!',
      isViewed: false,
      userId: user.id,
    });

    expect(response.props.userId).toEqual(user.id);
  });
});
