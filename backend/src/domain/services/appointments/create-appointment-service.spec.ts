import crypto from 'crypto';

import InMemoryAppointmentsRepository from '@in-memory/in-memory-appointments-repository';
import AppointmentsUsecase from '@usecases/implementations/appointments-usecase';
import CreateAppointmentService from './create-appointment-service';

import User from '@entities/user';
import Barber from '@entities/barber';
import Appointment from '@entities/appointment';

type SutOutput = {
  appointmentRepository: InMemoryAppointmentsRepository;
  sut: CreateAppointmentService;
};

const makeSut = (): SutOutput => {
  const appointmentRepository = new InMemoryAppointmentsRepository();
  const appointmentsUsecase = new AppointmentsUsecase(appointmentRepository);
  const sut = new CreateAppointmentService(
    appointmentRepository,
    appointmentsUsecase
  );

  return { appointmentRepository, sut };
};

describe('Create appointment service', () => {
  const { appointmentRepository, sut } = makeSut();

  const id = crypto.randomUUID();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
    barberId: id,
  }).value as User;

  const barber = Barber.create(
    {
      name: 'John Doe Barber',
      location: 'Somewhere Into the Pocket',
      description: 'This is a really good place, please believe me :)',
      openAtNight: true,
      openOnWeekends: true,
      userId: user.id,
    },
    id
  ).value as Barber;

  appointmentRepository.user.push(user);
  appointmentRepository.barber.push(barber);

  it('should be able to create a new appointment', async () => {
    const response = await sut.handle({
      date: new Date(),
      userId: user.id,
      barberId: barber.id,
    });

    expect(response.userId).toEqual(user.id);
    expect(response.barberId).toEqual(barber.id);

    expect(response).toBeInstanceOf(Appointment);
  });
});
