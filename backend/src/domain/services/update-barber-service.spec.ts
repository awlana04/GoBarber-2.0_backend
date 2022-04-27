import InMemoryBarbersRepository from '../../../tests/repositories/InMemoryBarbersRepository';
import UpdateBarberService from './update-barber-service';

import Barber from '../entities/barber';
import User from '../entities/user';

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
  it('should be able to update the barber', async () => {
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

    const response = await sut.handle({
      id: barber.id,
      name: 'John Doe Junior Barber',
      location: 'Somewhere Out of The Box',
      description: 'A really HELLA good place',
    });

    expect(response).toBeDefined();
  });
});
