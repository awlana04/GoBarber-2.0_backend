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
    name: 'John Doe Barber',
    location: 'Somewhere Over the Pocket',
    description: 'This is a really good place, please believe me :)',
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

  it('should be able to find a barber name', () => {
    const response = sut.checkBarberNameAlreadyExists('John Doe Barber');

    expect(response).rejects.toThrowError();
  });

  it('should not be able to find a barber name', async () => {
    const response = await sut.checkBarberNameAlreadyExists(
      'John Doe Barber Junior'
    );

    expect(response).toBeNull();
  });

  it('should not be able to find a barber', () => {
    const response = sut.checkBarberDoesNotExists('InvalidID');

    expect(response).rejects.toThrowError();
  });

  it('should be able to find a barber', async () => {
    const response = await sut.checkBarberDoesNotExists(barber.id);

    expect(response).toBeNull();
  });
});
