import InMemoryBarbersRepository from '@in-memory/in-memory-barbers-repository';
import UpdateBarberImageService from './update-barber-image-service';
import BarbersUsecase from '@usecases/implementations/barber-usecase';
import DiskStorageAdapter from '@adapters/implementations/disk-storage-adapter';

import User from '@entities/user';
import Barber from '@entities/barber';

type SutOutput = {
  barbersRepository: InMemoryBarbersRepository;
  sut: UpdateBarberImageService;
};

const makeSut = (): SutOutput => {
  const barbersRepository = new InMemoryBarbersRepository();
  const barbersUsecase = new BarbersUsecase(barbersRepository);
  const diskStorageAdapter = new DiskStorageAdapter();

  const sut = new UpdateBarberImageService(
    barbersRepository,
    barbersUsecase,
    diskStorageAdapter,
  );

  return { barbersRepository, sut };
};

describe('Update barber images', () => {
  const { barbersRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
    avatar: 'avatar.png',
  }).value as User;

  const barber = Barber.create({
    name: 'John Doe Barber',
    location: 'Somewhere Into the Pocket',
    description: 'This is a really good place, please believe me :)',
    openAtNight: true,
    openOnWeekends: true,
    userId: user.id,
  }).value as Barber;

  barbersRepository.user.push(user);
  barbersRepository.barber.push(barber);

  it('should be able to update the barber images', async () => {
    const response = await sut.handle({
      id: barber.id,
      images: ['image1.png', 'image2.png'],
    });

    expect(response).toBeDefined();
  });
});
