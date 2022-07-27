import InMemoryBarberRepository from '@in-memory/in-memory-barbers-repository';
import DeleteBarberAndAppointmentService from './delete-barber-and-appointment-service';
import BarbersUsecase from '@usecases/implementations/barber-usecase';

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

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
  }).value as User;

  const barber = Barber.create({
    name: 'John Doe Barber',
    location: 'Somewhere Into the Pocket',
    description: 'This is a really good place, please believe me :)',
    openAtNight: true,
    openOnWeekends: true,
    userId: user.id,
  }).value as Barber;

  const appointment = Appointment.create({
    date: new Date(),
    userId: user.id,
    barberId: barber.id,
  }).value as Appointment;

  barbersRepository.user.push(user);
  barbersRepository.barber.push(barber);
  barbersRepository.appointment.push(appointment);

  it('should be able to delete a barber and an appointment', async () => {
    const response = await sut.handle(barber.id);

    expect(response.id).toEqual(barber.id);
    expect(response).toEqual(barber);

    expect(response).toBeInstanceOf(Barber);
  });
});
