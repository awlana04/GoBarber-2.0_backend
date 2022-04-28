import crypto from 'crypto';

import InMemoryBarbersRepository from '../../../../tests/repositories/InMemoryBarbersRepository';
import UpdateBarberUserPassword from './update-barber-user-password-service';

import User from '../../entities/user';
import Barber from '../../entities/barber';

type SutOutput = {
  barbersRepository: InMemoryBarbersRepository;
  sut: UpdateBarberUserPassword;
};

const makeSut = (): SutOutput => {
  const barbersRepository = new InMemoryBarbersRepository();
  const sut = new UpdateBarberUserPassword(barbersRepository);

  return { barbersRepository, sut };
};

describe('Update barber user password service', () => {
  it('ahould be able to update the barber user password', async () => {
    const { barbersRepository, sut } = makeSut();

    const id = crypto.randomUUID();

    const user = User.create({
      name: 'John Doe',
      email: 'john@doe',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
      barberId: id,
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

    barbersRepository.user.push(user);
    barbersRepository.barber.push(barber);

    const response = await sut.handle({
      id: user.id,
      password: '12345678910',
    });

    expect(response).toBeDefined();
  });

  it('ahould NOT be able to update the barber user password with an invalid id', () => {
    const { barbersRepository, sut } = makeSut();

    const id = crypto.randomUUID();

    const user = User.create({
      name: 'John Doe',
      email: 'john@doe',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
      barberId: id,
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

    barbersRepository.user.push(user);
    barbersRepository.barber.push(barber);

    const response = sut.handle({
      id: 'invalidID',
      password: '12345678910',
    });

    expect(response).rejects.toThrowError();
  });
});
