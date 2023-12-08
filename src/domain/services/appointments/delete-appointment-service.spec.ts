import InMemoryAppointmentsRepository from '@in-memory/in-memory-appointments-repository';
import DeleteAppointmentService from './delete-appointment-service';
import AppointmentsUsecase from '@usecases/implementations/appointment-usecase';

import User from '@entities/user';
import Barber from '@entities/barber';
import Appointment from '@entities/appointment';

type SutOutput = {
  appointmentsRepository: InMemoryAppointmentsRepository;
  sut: DeleteAppointmentService;
};

const makeSut = (): SutOutput => {
  const appointmentsRepository = new InMemoryAppointmentsRepository();
  const appointmentsUsecase = new AppointmentsUsecase(appointmentsRepository);
  const sut = new DeleteAppointmentService(
    appointmentsRepository,
    appointmentsUsecase
  );

  return { appointmentsRepository, sut };
};

describe('Delete appointment service', () => {
  const { appointmentsRepository, sut } = makeSut();

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

  appointmentsRepository.user.push(user);
  appointmentsRepository.barber.push(barber);
  appointmentsRepository.appointment.push(appointment);

  it('should not be able to delete an appointment with an invalid id', () => {
    const response = sut.handle('invalidID');

    expect(response).rejects.toThrowError();
  });

  it('should be able to delete an appointment', async () => {
    const response = await sut.handle(appointment.id);

    expect(response.id).toEqual(appointment.id);
    expect(response).toEqual(appointment);

    expect(response).toBeInstanceOf(Appointment);
  });
});
