import crypto from 'crypto';

import InMemoryAppointmentsRepository from '@in-memory/in-memory-appointments-repository';
import AppointmentsUsecase from '@usecases/implementations/appointments-usecase';
import GetAllAppointmentsService from './get-all-appointments-service';

import User from '@entities/user';
import Barber from '@entities/barber';
import Appointment from '@entities/appointment';

type SutOutput = {
  appointmentsRepository: InMemoryAppointmentsRepository;
  sut: GetAllAppointmentsService;
};

const makeSut = (): SutOutput => {
  const appointmentsRepository = new InMemoryAppointmentsRepository();
  const appointmentsUsecase = new AppointmentsUsecase(appointmentsRepository);
  const sut = new GetAllAppointmentsService(
    appointmentsRepository,
    appointmentsUsecase
  );

  return { appointmentsRepository, sut };
};

describe('Get all appointments service', () => {
  const { appointmentsRepository, sut } = makeSut();

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
    description: 'This is a really good place, please believe me :)',
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

  appointmentsRepository.user.push(user);
  appointmentsRepository.barber.push(barber);
  appointmentsRepository.appointment.push(appointment);

  it('should NOT be able to get all appointments with an invalod id', () => {
    const response = sut.handle('invalidID');

    expect(response).rejects.toThrowError();
  });

  it('should be able to get all appointments', async () => {
    const response = await sut.handle(barber.id);

    expect(response).toBeInstanceOf(Appointment);
  });
});
