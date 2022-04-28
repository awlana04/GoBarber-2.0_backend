import crypto from 'crypto';

import InMemoryBarbersRepository from '../../../../tests/repositories/InMemoryBarbersRepository';
import UpdateBarberService from './update-barber-service';

import User from '../../entities/user';
import Barber from '../../entities/barber';

type SutOutput = {
  barberRepository: InMemoryBarbersRepository;
  sut: UpdateBarberService;
};

const makeSut = (): SutOutput => {
  const barberRepository = new InMemoryBarbersRepository();
  const sut = new UpdateBarberService(barberRepository);

  return { barberRepository, sut };
};

describe('Update barber service', () => {
  const id = crypto.randomUUID();

  it('should be able to update the barber', async () => {
    const { barberRepository, sut } = makeSut();

    const user = User.create({
      name: 'John Doe',
      email: 'john@doe',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
    });

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
    );

    barberRepository.user.push(user);
    barberRepository.barber.push(barber);

    const response = await sut.handle({
      id: barber.id,
      name: 'John Doe Junior Barber',
      location: 'Somewhere Out of The Box',
      description: 'A Really HELLA Good Place',
      openAtNight: false,
      openOnWeekends: false,
    });

    console.log(response);

    expect(response).toBeDefined();
  });

  it('should be able to update the barber name', async () => {
    const { barberRepository, sut } = makeSut();

    const user = User.create({
      name: 'John Doe',
      email: 'john@doe',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
    });

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
    );

    barberRepository.user.push(user);
    barberRepository.barber.push(barber);

    const response = await sut.handle({
      id: barber.id,
      name: 'John Doe Junior Barber',
    });

    expect(response).toBeDefined();
  });

  it('should be able to update the barber location', async () => {
    const { barberRepository, sut } = makeSut();

    const user = User.create({
      name: 'John Doe',
      email: 'john@doe',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
    });

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
    );

    barberRepository.user.push(user);
    barberRepository.barber.push(barber);

    const response = await sut.handle({
      id: barber.id,
      location: 'Somewhere Out of The Box',
    });

    expect(response).toBeDefined();
  });

  it('should be able to update the barber description', async () => {
    const { barberRepository, sut } = makeSut();

    const user = User.create({
      name: 'John Doe',
      email: 'john@doe',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
    });

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
    );

    barberRepository.user.push(user);
    barberRepository.barber.push(barber);

    const response = await sut.handle({
      id: barber.id,
      name: 'John Doe Junior Barber',
      location: 'Somewhere Out of The Box',
      description: 'A really HELLA good place',
    });

    expect(response).toBeDefined();
  });

  it('should NOT be able to update the barber with an invalid id', () => {
    const { barberRepository, sut } = makeSut();

    const user = User.create({
      name: 'John Doe',
      email: 'john@doe',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
    });

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
    );

    barberRepository.user.push(user);
    barberRepository.barber.push(barber);

    const response = sut.handle({
      id: 'invalidID',
      name: 'John Doe Junior Barber',
      location: 'Somewhere Out of The Box',
      description: 'A really HELLA good place',
    });

    expect(response).rejects.toThrowError();
  });
});
