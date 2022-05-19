import crypto from 'crypto';

import InMemoryBarbersRepository from '@in-memory/in-memory-barbers-repository';
import BarbersUsecase from '@usecases/implementations/barbers-usecase';
import UpdateBarberUserPassword from './update-barber-user-password-service';

import User from '@entities/user';
import Barber from '@entities/barber';

type SutOutput = {
  barbersRepository: InMemoryBarbersRepository;
  sut: UpdateBarberUserPassword;
};

const makeSut = (): SutOutput => {
  const barbersRepository = new InMemoryBarbersRepository();
  const barbersUsecase = new BarbersUsecase(barbersRepository);
  const sut = new UpdateBarberUserPassword(barbersRepository, barbersUsecase);

  return { barbersRepository, sut };
};

describe('Update barber user password service', () => {
  const { barbersRepository, sut } = makeSut();

  const id = crypto.randomUUID();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
    barberId: id,
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

  barbersRepository.user.push(user);
  barbersRepository.barber.push(barber);

  it('should NOT be able to update the barber user password with an invalid user id', () => {
    const response = sut.handle({
      id,
      userId: 'invalidID',
      password: '12345678910',
    });

    expect(response).rejects.toThrowError();
  });

  it('ahould NOT be able to update the barber user password with an invalid id', () => {
    const response = sut.handle({
      id: 'invalidID',
      userId: user.id,
      password: '12345678910',
    });

    expect(response).rejects.toThrowError();
  });

  it('ahould be able to update the barber user password', async () => {
    const response = await sut.handle({
      id,
      userId: user.id,
      password: '12345678910',
    });

    expect(response).toBeDefined();
  });
});
