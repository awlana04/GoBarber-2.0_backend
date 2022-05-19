import InMemoryNotificationsRepository from '@in-memory/in-memory-notifications-repository';
import NotificationsUsecase from './notifications-usecase';

import User from '@entities/user';

type SutOutput = {
  notificationsRepository: InMemoryNotificationsRepository;
  sut: NotificationsUsecase;
};

const makeSut = (): SutOutput => {
  const notificationsRepository = new InMemoryNotificationsRepository();
  const sut = new NotificationsUsecase(notificationsRepository);

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

  it('should not be able to find a notification with invalid user id', () => {
    const response = sut.checkUserExists('invalidID');

    expect(response).rejects.toThrowError();
  });
});
