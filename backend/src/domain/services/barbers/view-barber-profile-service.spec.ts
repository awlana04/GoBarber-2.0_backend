import crypto from 'crypto';

import InMemoryBarbersRepository from '../../../../tests/repositories/InMemoryBarbersRepository';
import ViewBarberProfileService from './view-barber-profile-service';

import User from '../../entities/modules/user';
import Barber from '../../entities/modules/barber';

type SutOutput = {
  barbersRepository: InMemoryBarbersRepository;
  sut: ViewBarberProfileService;
};

const makeSut = (): SutOutput => {
  const barbersRepository = new InMemoryBarbersRepository();
  const sut = new ViewBarberProfileService(barbersRepository);

  return { barbersRepository, sut };
};

describe('View barber profile service', () => {
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

  it('should NOT be able to view the barber profile with an invalid id', () => {
    const response = sut.handle('invalidID');

    expect(response).rejects.toThrowError();
  });

  it('should be able to view the barber profile', async () => {
    const response = await sut.handle(id);

    expect(response.id).toEqual(id);
    expect(response).toEqual(barber);

    expect(response).toBeInstanceOf(Barber);
  });
});
