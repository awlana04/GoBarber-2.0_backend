import crypto from 'crypto';

import InMemoryAppointmentsRepository from '@in-memory/in-memory-appointments-repository';
import ViewAppointmentService from './view-appointment-service';

import User from '@entities/user';
import Barber from '@entities/barber';
import Appointment from '@entities/appointment';

type SutOutput = {
  appointmentsRepository: InMemoryAppointmentsRepository;
  sut: ViewAppointmentService;
};

const makeSut = (): SutOutput => {
  const appointmentsRepository = new InMemoryAppointmentsRepository();
  const sut = new ViewAppointmentService(appointmentsRepository);

  return { appointmentsRepository, sut };
};

describe('View appointment service', () => {
  const { appointmentsRepository, sut } = makeSut();

  const id = crypto.randomUUID();

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

  it('should be able to view an appointment', async () => {
    const response = await sut.handle(appointment.id);

    expect(response.id).toEqual(appointment.id);
    expect(response).toEqual(appointment);

    expect(response).toBeInstanceOf(Appointment);
  });
});
