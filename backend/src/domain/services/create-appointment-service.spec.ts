import CreateAppointmentService from './create-appointment-service';

import InMemoryAppointmentsRepository from '../../../tests/repositories/InMemoryAppointmentsRepository';

import User from '../entities/user';
import Barber from '../entities/barber';
import Appointment from '../entities/appointment';

type SutOutput = {
  appointmentRepository: InMemoryAppointmentsRepository;
  sut: CreateAppointmentService;
};

const makeSut = (): SutOutput => {
  const appointmentRepository = new InMemoryAppointmentsRepository();
  const sut = new CreateAppointmentService(appointmentRepository);

  return { appointmentRepository, sut };
};

describe('Create appointment service', () => {
  it('should be able to create a new appointment', async () => {
    const { appointmentRepository, sut } = makeSut();

    const user = User.create({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
    });

    const barber = Barber.create({
      name: 'John Doe Barber',
      location: 'Somewhere Into the Pocket',
      description: 'A Really Good Place',
      openAtNight: true,
      openOnWeekends: true,
      userId: user.id,
    });

    appointmentRepository.user.push(user);
    appointmentRepository.barber.push(barber);

    const response = await sut.handle({
      date: new Date(),
      userId: user.id,
      barberId: barber.id,
    });

    expect(response).toBeInstanceOf(Appointment);
  });

  it('should NOT be able to create a new appointment with an invalid userId', () => {
    const { appointmentRepository, sut } = makeSut();

    const barber = Barber.create({
      name: 'John Doe Barber',
      location: 'Somewhere Into the Pocket',
      description: 'A Really Good Place',
      openAtNight: true,
      openOnWeekends: true,
      userId: 'InvalidID',
    });

    appointmentRepository.barber.push(barber);

    const response = sut.handle({
      date: new Date(),
      userId: 'InvalidID',
      barberId: barber.id,
    });

    expect(response).rejects.toThrowError();
  });

  it('should NOT be able to create a new appointment with an invalid barberId', () => {
    const { appointmentRepository, sut } = makeSut();

    const user = User.create({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
    });

    appointmentRepository.user.push(user);

    const response = sut.handle({
      date: new Date(),
      userId: user.id,
      barberId: 'InvalidID',
    });

    expect(response).rejects.toThrowError();
  });

  it('should NOT be able to create a new appointment with an invalid date', () => {
    const { appointmentRepository, sut } = makeSut();

    const user = User.create({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '12345678',
      location: 'Somewhere Over the Rainbow',
    });

    const barber = Barber.create({
      name: 'John Doe Barber',
      location: 'Somewhere Into the Pocket',
      description: 'A Really Good Place',
      openAtNight: true,
      openOnWeekends: true,
      userId: user.id,
    });

    const appointment = Appointment.create({
      date: new Date(),
      userId: user.id,
      barberId: barber.id,
    });

    appointmentRepository.user.push(user);
    appointmentRepository.barber.push(barber);
    appointmentRepository.appointment.push(appointment);

    const response = sut.handle({
      date: new Date(),
      userId: user.id,
      barberId: barber.id,
    });

    expect(response).rejects.toThrowError();
  });
});
