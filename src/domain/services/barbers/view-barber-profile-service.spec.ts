import InMemoryBarbersRepository from '@in-memory/in-memory-barbers-repository';
import ViewBarberProfileService from './view-barber-profile-service';

import User from '@entities/user';
import Barber from '@entities/barber';

type SutOutput = {
  barbersRepository: InMemoryBarbersRepository;
  sut: ViewBarberProfileService;
};

const makeSut = (): SutOutput => {
  const barbersRepository = new InMemoryBarbersRepository();
  const sut = new ViewBarberProfileService(barbersRepository);

  return { barbersRepository, sut };
};

describe('View barber profile service', () => {
  const { barbersRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
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

  it('should be able to view the barber profile', async () => {
    const response = await sut.handle(barber.id);

    expect(response.id).toEqual(barber.id);
    expect(response).toEqual(barber);

    expect(response).toBeInstanceOf(Barber);
  });
});
