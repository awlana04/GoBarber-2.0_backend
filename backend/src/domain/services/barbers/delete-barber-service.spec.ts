import crypto from 'crypto';

import InMemoryBarbersRepository from '@in-memory/in-memory-barbers-repository';
import DeleteBarberService from './delete-barber-service';

import User from '@entities/user';
import Barber from '@entities/barber';

type SutOutput = {
  barbersRepository: InMemoryBarbersRepository;
  sut: DeleteBarberService;
};

const makeSut = (): SutOutput => {
  const barbersRepository = new InMemoryBarbersRepository();
  const sut = new DeleteBarberService(barbersRepository);

  return { barbersRepository, sut };
};

describe('Delete barber service', () => {
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
    location: 'Somewhere Into the Pocket',
    description: 'A really good place',
    openAtNight: true,
    openOnWeekends: true,
    userId: user.id,
  }).value as Barber;

  barbersRepository.user.push(user);
  barbersRepository.barber.push(barber);

  it('should NOT be able to delete a barber with an invalid id', () => {
    const response = sut.handle('invalidID');

    expect(response).rejects.toThrowError();
  });

  it('should be able to delete a barber', async () => {
    const response = await sut.handle(barber.id);

    expect(response.id).toEqual(barber.id);
    expect(response).toEqual(barber);

    expect(response).toBeInstanceOf(Barber);
  });
});
