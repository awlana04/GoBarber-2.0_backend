import InMemoryBarbersRepository from '@in-memory/in-memory-barbers-repository';
import UpdateBarberUserAvatarService from './update-barber-user-avatar-service';
import BarbersUsecase from '@usecases/implementations/barbers-usecase';

import User from '@entities/user';
import Barber from '@entities/barber';

type SutOutput = {
  barbersRepository: InMemoryBarbersRepository;
  sut: UpdateBarberUserAvatarService;
};

const makeSut = (): SutOutput => {
  const barbersRepository = new InMemoryBarbersRepository();
  const barbersUsecase = new BarbersUsecase(barbersRepository);
  const sut = new UpdateBarberUserAvatarService(
    barbersRepository,
    barbersUsecase
  );

  return { barbersRepository, sut };
};

describe('Update barber user avatar', () => {
  const { barbersRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
    avatar: 'avatar.png',
  }).value as User;

  const barber = Barber.create({
    name: 'John Doe Barber',
    location: 'Somewhere Into the Pocket',
    description: 'This is a really good place, please believe me :)',
    openAtNight: true,
    openOnWeekends: true,
    userId: user.id,
  }).value as Barber;

  barbersRepository.user.push(user);
  barbersRepository.barber.push(barber);

  it('should be able to update the barber avatar', async () => {
    const response = await sut.handle({
      id: barber.id,
      userId: user.id,
      avatar: 'another-avatar.png',
    });

    expect(response).toBeDefined();
  });
});
