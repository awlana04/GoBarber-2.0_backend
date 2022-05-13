import crypto from 'crypto';

import InMemoryBarbersRepository from '@in-memory/in-memory-barbers-repository';
import BarbersUsecase from './barbers-usecase';

import User from '@entities/user';
import Barber from '@entities/barber';

type SutOutput = {
  barbersRepository: InMemoryBarbersRepository;
  sut: BarbersUsecase;
};

const makeSut = (): SutOutput => {
  const barbersRepository = new InMemoryBarbersRepository();
  const sut = new BarbersUsecase(barbersRepository);

  return { barbersRepository, sut };
};

describe('Barbers usecase', () => {
  const { barbersRepository, sut } = makeSut();

  const id = crypto.randomUUID();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
    barberId: id,
  }).value as User;

  const barber = Barber.create({
    name: 'Jonh Doe Barber',
    description: 'A Really Good Place',
    location: 'Somewhere Over the Pocket',
    openOnWeekends: true,
    openAtNight: true,
    userId: user.id,
  }).value as Barber;

  barbersRepository.user.push(user);
  barbersRepository.barber.push(barber);

  it('should not be able to find an user', () => {
    const response = sut.checkUserExists('invalidID');

    expect(response).rejects.toThrowError();
  });

  it('should be able to find an user', async () => {
    const response = await sut.checkUserExists(barber.userId);

    expect(response).toBeNull();
  });
});
