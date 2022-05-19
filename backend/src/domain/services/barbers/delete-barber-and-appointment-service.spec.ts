import crypto from 'crypto';

import InMemoryBarberRepository from '@in-memory/in-memory-barbers-repository';
import BarbersUsecase from '@usecases/implementations/barbers-usecase';
import DeleteBarberAndAppointmentService from './delete-barber-and-appointment-service';

import User from '@entities/user';
import Barber from '@entities/barber';
import Appointment from '@entities/appointment';

type SutOutput = {
  barbersRepository: InMemoryBarberRepository;
  sut: DeleteBarberAndAppointmentService;
};

const makeSut = (): SutOutput => {
  const barbersRepository = new InMemoryBarberRepository();
  const barbersUsecase = new BarbersUsecase(barbersRepository);
  const sut = new DeleteBarberAndAppointmentService(
    barbersRepository,
    barbersUsecase
  );

  return { barbersRepository, sut };
};

describe('Delete barber and appointment service', () => {
  const { barbersRepository, sut } = makeSut();

  const id = crypto.randomUUID();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
    barberId: id,
  }).value as User;

  const barber = Barber.create({
    name: 'John Doe Barber',
    location: 'Somewhere Into the Pocket',
    description: 'A really good place',
    openAtNight: true,
    openOnWeekends: true,
    userId: user.id,
    appointmentId: [id],
  }).value as Barber;

  const appointment = Appointment.create(
    {
      date: new Date(),
      userId: user.id,
      barberId: barber.id,
    },
    id
  );

  barbersRepository.user.push(user);
  barbersRepository.barber.push(barber);
  barbersRepository.appointment.push(appointment);

  it('should NOT be able to delete a barber and an appointment with an invalod id', () => {
    const response = sut.handle('invalidID');

    expect(response).rejects.toThrowError();
  });

  it('should be able to delete a barber and an appointment', async () => {
    const response = await sut.handle(barber.id);

    expect(response.id).toEqual(barber.id);
    expect(response).toEqual(barber);

    expect(response).toBeInstanceOf(Barber);
  });
});
