import crypto from 'crypto';

import InMemoryBarbersRepository from '@in-memory/in-memory-barbers-repository';
import GetAllBarbersService from './get-all-barbers-service';

import User from '@entities/user';
import Barber from '@entities/barber';

type SutOutput = {
  barbersRepository: InMemoryBarbersRepository;
  sut: GetAllBarbersService;
};

const makeSut = (): SutOutput => {
  const barbersRepository = new InMemoryBarbersRepository();
  const sut = new GetAllBarbersService(barbersRepository);

  return { barbersRepository, sut };
};

describe('Get all barbers service', () => {
  const { barbersRepository, sut } = makeSut();

  const id = crypto.randomUUID();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
  }).value as User;

  const barber = Barber.create({
    name: 'John Doe Barber',
    location: 'Somewhere Into the Pocket',
    description: 'A really good place',
    openAtNight: true,
    openOnWeekends: true,
    userId: user.id,
  }).value as Barber;

  barbersRepository.user.push(user);
  barbersRepository.barber.push(barber);

  it('should NOT be abel to get all barbers with an invalid user id', () => {
    const response = sut.handle('invalidID');

    expect(response).rejects.toThrowError();
  });

  it('should be able to get all barbers', async () => {
    const response = await sut.handle(user.id);

    expect(response).toBeDefined();
  });
});
