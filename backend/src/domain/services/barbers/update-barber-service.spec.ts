import crypto from 'crypto';

import InMemoryBarbersRepository from '@in-memory/in-memory-barbers-repository';
import UpdateBarberService from './update-barber-service';
import BarbersUsecase from '@usecases/implementations/barbers-usecase';

import User from '@entities/user';
import Barber from '@entities/barber';

type SutOutput = {
  barberRepository: InMemoryBarbersRepository;
  sut: UpdateBarberService;
};

const makeSut = (): SutOutput => {
  const barberRepository = new InMemoryBarbersRepository();
  const barbersUsecase = new BarbersUsecase(barberRepository);
  const sut = new UpdateBarberService(barberRepository, barbersUsecase);

  return { barberRepository, sut };
};

describe('Update barber service', () => {
  const id = crypto.randomUUID();

  const { barberRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
  }).value as User;

  const barber = Barber.create(
    {
      name: 'John Doe Barber',
      location: 'Somewhere Into the Pocket',
      description: 'This is a really good place, please believe me :)',
      openAtNight: true,
      openOnWeekends: true,
      userId: user.id,
    },
    id
  ).value as Barber;

  barberRepository.user.push(user);
  barberRepository.barber.push(barber);

  it('should be able to update the barber', async () => {
    const name = 'John Doe Junior Barber';
    const location = 'Somewhere Out of The Box';
    const description =
      'This is a HELLA really good place, please believe me :)';
    const openAtNight = false;
    const openOnWeekends = false;

    const response = await sut.handle({
      id: barber.id,
      name,
      location,
      description,
      openAtNight,
      openOnWeekends,
    });

    expect(response.value).toBeDefined();
  });
});
