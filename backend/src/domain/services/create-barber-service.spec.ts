import CreateBarberService from './create-barber-service';

import InMemoryBarbersRepository from '../../../tests/repositories/InMemoryBarbersRepository';

import User from '../entities/user';
import Barber from '../entities/barber';

type SutOutput = {
  barberRepository: InMemoryBarbersRepository;
  sut: CreateBarberService;
};

const makeSut = (): SutOutput => {
  const barberRepository = new InMemoryBarbersRepository();
  const sut = new CreateBarberService(barberRepository);

  return { barberRepository, sut };
};

describe('Create barber service', () => {
  it('should be able to create a new barber', async () => {
    const { barberRepository, sut } = makeSut();

    const user = User.create({
      name: 'John Doe',
      email: 'john@doe',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
    });

    barberRepository.user.push(user);

    const response = await sut.handle({
      name: 'John Doe Barber',
      location: 'Somewhere Into the Pocket',
      description: 'A really good place',
      openAtNight: true,
      openOnWeekends: true,
      userId: user.id,
    });

    expect(response).toBeInstanceOf(Barber);
  });

  it('should NOT be able to create a new barber with an invalid userId', () => {
    const { sut } = makeSut();

    const response = sut.handle({
      name: 'John Doe Barber',
      location: 'Somewhere Into the Pocket',
      description: 'A really good place',
      openAtNight: true,
      openOnWeekends: true,
      userId: 'InvalidUUID',
    });

    expect(response).rejects.toThrowError();
  });

  it('should NOT be able to create a new barber with an invalid name', () => {
    const { barberRepository, sut } = makeSut();

    const user = User.create({
      name: 'John Doe',
      email: 'john@doe',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
    });

    const barber = Barber.create({
      name: 'John Doe Barber',
      location: 'Somewhere Into the Pocket',
      description: 'A really good place',
      openAtNight: true,
      openOnWeekends: true,
      userId: user.id,
    });

    barberRepository.user.push(user);
    barberRepository.barber.push(barber);

    const response = sut.handle({
      name: 'John Doe Barber',
      location: 'Somewhere Into the Pocket',
      description: 'A really good place',
      openAtNight: true,
      openOnWeekends: true,
      userId: user.id,
    });

    expect(response).rejects.toThrowError();
  });
});
