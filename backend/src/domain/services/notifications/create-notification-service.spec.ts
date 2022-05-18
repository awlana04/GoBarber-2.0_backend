import InMemoryNotificationsRepository from '@in-memory/in-memory-notifications-repository';
import NotificationsUsecase from '@usecases/implementations/notifications-usecase';
import CreateNotificationService from './create-notification-service';

import User from '@entities/user';

type SutOutput = {
  notificationsRepository: InMemoryNotificationsRepository;
  notificationsUsecase: NotificationsUsecase;
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

  return { notificationsRepository, notificationsUsecase, sut };
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

  it('should not be able to find a notification with invalid user id', () => {
    const response = sut.handle({
      title: 'Welcome',
      message: 'Welcome to GoBarber-2.0!',
      isViewed: false,
      userId: 'invalidID',
    });

    expect(response).rejects.toThrowError();
  });
});
