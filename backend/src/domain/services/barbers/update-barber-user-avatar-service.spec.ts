import crypto from 'crypto';

import InMemoryBarbersRepository from '../../../../tests/repositories/InMemoryBarbersRepository';
import UpdateBarberUserAvatarService from './update-barber-user-avatar-service';

import User from '../../entities/user';
import Barber from '../../entities/barber';

type SutOutput = {
  barbersRepository: InMemoryBarbersRepository;
  sut: UpdateBarberUserAvatarService;
};

const makeSut = (): SutOutput => {
  const barbersRepository = new InMemoryBarbersRepository();
  const sut = new UpdateBarberUserAvatarService(barbersRepository);

  return { barbersRepository, sut };
};

describe('Update barber user avatar', () => {
  const id = crypto.randomUUID();

  it('should be able to update the barber avatar', async () => {
    const { barbersRepository, sut } = makeSut();

    const user = User.create({
      name: 'John Doe',
      email: 'john@doe',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
      avatar: 'avatar.png',
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
      avatar: 'another-avatar.png',
    });

    expect(response).toBeDefined();
  });

  it('should NOT be able to update the barber avatar with an invalid id', () => {
    const { barbersRepository, sut } = makeSut();

    const user = User.create({
      name: 'John Doe',
      email: 'john@doe',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
      avatar: 'avatar.png',
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
      avatar: 'another-avatar.png',
    });

    expect(response).rejects.toThrowError();
  });
});
