import InMemoryBarbersRepository from '@in-memory/in-memory-barbers-repository';
import BarbersUsecase from '@usecases/implementations/barbers-usecase';
import CreateBarberService from './create-barber-service';

import User from '@entities/user';
import Barber from '@entities/barber';

type SutOutput = {
  barberRepository: InMemoryBarbersRepository;
  sut: CreateBarberService;
};

const makeSut = (): SutOutput => {
  const barberRepository = new InMemoryBarbersRepository();
  const barbersUsecase = new BarbersUsecase(barberRepository);
  const sut = new CreateBarberService(barberRepository, barbersUsecase);

  return {
    barberRepository,
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
    const name = 'John Doe Barber';
    const location = 'Somewhere Into the Pocket';
    const description = 'This is a really good place, please believe me :)';
    const openAtNight = true;
    const openOnWeekends = true;

    const response = await sut.handle({
      name,
      location,
      description,
      openAtNight,
      openOnWeekends,
      userId: user.id,
    });

    console.log(response.value);

    expect(response.value).toBeInstanceOf(Barber);
  });
});
