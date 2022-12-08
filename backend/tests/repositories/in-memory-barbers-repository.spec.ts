import InMemoryBarbersRepository from './in-memory-barbers-repository';

import User from '@entities/user';
import Barber from '@entities/barber';
import Appointment from '@entities/appointment';

describe('In memory barbers repository', () => {
  const barberRepository = new InMemoryBarbersRepository();

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

  barberRepository.user.push(user);
  barberRepository.barber.push(barber);

  it('should be able to find a barber by id', async () => {
    const response = await barberRepository.findById(barber.id);

    expect(response!.id).toEqual(barber.id);
  });

  it('should be able to find an user id', async () => {
    const response = await barberRepository.findUserId(user.id);

    expect(response!.id).toEqual(user.id);
  });

  it('should be able to find a barber by name', async () => {
    const response = await barberRepository.findByName(barber.name.value);

    expect(response!.name.value).toEqual(barber.name.value);
  });

  it('it should be able to get all barbers', async () => {
    const response = await barberRepository.getAllBarbers();

    expect(response).toBeDefined();
  });

  it('should be able to save a barber', async () => {
    const response = await barberRepository.save({
      name: barber.name.value,
      location: barber.location.value,
      description: barber.description.value,
      openAtNight: true,
      openOnWeekends: true,
      userId: user.id,
    });

    expect(response).toBeDefined();
  });

  it('should be able to update a barber', async () => {
    const response = await barberRepository.update(barber.id, {
      name: 'John Doe Junior Barber',
      location: 'Somewhere Out of The Box',
      description: 'This is a HELLA really good place, please believe me :)',
      openAtNight: false,
      openOnWeekends: false,
    });

    expect(response).toBeDefined();
  });

  it('should be able to update the user password of a barber', async () => {
    const response = await barberRepository.updatePassword(
      barber.id,
      '12345678910'
    );

    expect(response).toBeDefined();
  });

  it('should be able to update the user avatar of a barber', async () => {
    const response = await barberRepository.updateAvatar(
      barber.id,
      'other-avatar.png'
    );

    expect(response).toBeDefined();
  });

  it('should be able to delete a barber', async () => {
    const response = await barberRepository.delete(barber.id);

    expect(response).toBeDefined();
  });

  it('should be able to delete a barber and the aopointments', async () => {
    const response = await barberRepository.deleteBarberAndAppointments(
      barber.id
    );

    expect(response).toBeDefined();
  });
});
