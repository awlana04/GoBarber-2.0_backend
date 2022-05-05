import crypto from 'crypto';

import InMemoryBarbersRepository from '@in-memory/in-memory-barbers-repository';
import CheckUserExistsUsecase from '@usecases/implementations/barbers/check-user-exists-usecase';
import CheckBarberNameAlreadyExistsUsecase from '@usecases/implementations/barbers/check-barber-name-already-exists-usecase';
import CreateBarberService from './create-barber-service';

import User from '@entities/user';
import Barber from '@entities/barber';

type SutOutput = {
  barberRepository: InMemoryBarbersRepository;
  checkUserExists: CheckUserExistsUsecase;
  checkBarberNameAlreadyExists: CheckBarberNameAlreadyExistsUsecase;
  sut: CreateBarberService;
};

const makeSut = (): SutOutput => {
  const barberRepository = new InMemoryBarbersRepository();
  const checkUserExists = new CheckUserExistsUsecase(barberRepository);
  const checkBarberNameAlreadyExists = new CheckBarberNameAlreadyExistsUsecase(
    barberRepository
  );
  const sut = new CreateBarberService(
    barberRepository,
    checkUserExists,
    checkBarberNameAlreadyExists
  );

  return {
    barberRepository,
    checkUserExists,
    checkBarberNameAlreadyExists,
    sut,
  };
};

describe('Create barber service', () => {
  const { barberRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
  }).value as User;

  barberRepository.user.push(user);

  it('should be able to create a new barber', async () => {
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
    const id = crypto.randomUUID();

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
