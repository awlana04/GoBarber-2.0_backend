import crypto from 'crypto';

import InMemoryAppointmentsRepository from '@in-memory/in-memory-appointments-repository';
import AppointmentsUsecase from '@usecases/implementations/appointments-usecase';
import UpdateAppointmentService from './update-appointment-service';

import User from '@entities/user';
import Barber from '@entities/barber';
import Appointment from '@entities/appointment';

type SutOutput = {
  appointmentRepository: InMemoryAppointmentsRepository;
  sut: UpdateAppointmentService;
};

const makeSut = (): SutOutput => {
  const appointmentRepository = new InMemoryAppointmentsRepository();
  const appointmentsUsecase = new AppointmentsUsecase(appointmentRepository);
  const sut = new UpdateAppointmentService(
    appointmentRepository,
    appointmentsUsecase
  );

  return { appointmentRepository, sut };
};

describe('Update appointment service', () => {
  const id = crypto.randomUUID();

  const { appointmentRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
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

  const appointment = Appointment.create({
    date: new Date(),
    userId: user.id,
    barberId: barber.id,
  });

  appointmentRepository.user.push(user);
  appointmentRepository.barber.push(barber);
  appointmentRepository.appointment.push(appointment);

  it('should be able to update the appointment', async () => {
    const response = await sut.handle({
      id: appointment.id,
      date: new Date(),
    });

    expect(response).toBeDefined();
  });
});
