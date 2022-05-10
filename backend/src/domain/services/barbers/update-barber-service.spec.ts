import crypto from 'crypto';

import InMemoryBarbersRepository from '@in-memory/in-memory-barbers-repository';
import BarbersUsecase from '@usecases/implementations/barbers-usecase';
import UpdateBarberService from './update-barber-service';

import User from '@entities/user';
import Barber from '@entities/barber';

type SutOutput = {
  barberRepository: InMemoryBarbersRepository;
  barbersUsecase: BarbersUsecase;
  sut: UpdateBarberService;
};

const makeSut = (): SutOutput => {
  const barberRepository = new InMemoryBarbersRepository();
  const barbersUsecase = new BarbersUsecase(barberRepository);
  const sut = new UpdateBarberService(barberRepository, barbersUsecase);

  return { barberRepository, barbersUsecase, sut };
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
      description: 'A really good place',
      openAtNight: true,
      openOnWeekends: true,
      userId: user.id,
    },
    id
  ).value as Barber;

  barberRepository.user.push(user);
  barberRepository.barber.push(barber);

  it('should be able to update the barber', async () => {
    const response = await sut.handle({
      id: barber.id,
      name: 'John Doe Junior Barber',
      location: 'Somewhere Out of The Box',
      description: 'A Really HELLA Good Place',
      openAtNight: false,
      openOnWeekends: false,
    });

    expect(response).toBeDefined();
  });

  it('should be able to update the barber name', async () => {
    const response = await sut.handle({
      id: barber.id,
      name: 'John Doe Junior Barber',
    });

    expect(response).toBeDefined();
  });

  it('should be able to update the barber location', async () => {
    const response = await sut.handle({
      id: barber.id,
      location: 'Somewhere Out of The Box',
    });

    expect(response).toBeDefined();
  });

  it('should be able to update the barber description', async () => {
    const response = await sut.handle({
      id: barber.id,
      description: 'A really HELLA good place',
    });

    expect(response).toBeDefined();
  });

  it('should be able to update the barber open at night boolean', async () => {
    const response = await sut.handle({
      id: barber.id,
      openAtNight: false,
    });

    expect(response.props.openAtNight).toBeFalsy();
  });

  it('should be able to update the barber open on weekends boolean', async () => {
    barberRepository.barber.push(barber);

    const response = await sut.handle({
      id: barber.id,
      openOnWeekends: false,
    });

    expect(response.props.openOnWeekends).toBeFalsy();
  });

  it('should NOT be able to update the barber with an invalid id', () => {
    const response = sut.handle({
      id: 'invalidID',
      name: 'John Doe Junior Barber',
      location: 'Somewhere Out of The Box',
      description: 'A really HELLA good place',
      openAtNight: false,
      openOnWeekends: false,
    });

    expect(response).rejects.toThrowError();
  });
});
