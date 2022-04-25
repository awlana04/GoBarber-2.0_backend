import CreateBarberService from './create-barber-service';

import InMemoryBarbersRepository from '../../../tests/repositories/InMemoryBarbersRepository';

import User from '../entities/user';
import Barber from '../entities/barber';

describe('Create barber service', () => {
  it('should be able to create a new barber', async () => {
    const barberRepository = new InMemoryBarbersRepository();
    const createAppointment = new CreateBarberService(barberRepository);

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

    const response = await createAppointment.handle({
      name: barber.props.name,
      location: barber.props.location,
      description: barber.props.description,
      openAtNight: barber.props.openAtNight,
      openOnWeekends: barber.props.openOnWeekends,
      userId: barber.props.userId,
    });

    expect(response).toBeTruthy();
  });
});
