import crypto from 'crypto';

import InMemoryAppointmentsRepository from '@in-memory/in-memory-appointments-repository';
import AppointmentsUsecase from '@usecases/implementations/appointments-usecase';
import CreateAppointmentService from './create-appointment-service';

import User from '@entities/user';
import Barber from '@entities/barber';
import Appointment from '@entities/appointment';

type SutOutput = {
  appointmentRepository: InMemoryAppointmentsRepository;
  appointmentsUsecase: AppointmentsUsecase;
  sut: CreateAppointmentService;
};

const makeSut = (): SutOutput => {
  const appointmentRepository = new InMemoryAppointmentsRepository();
  const appointmentsUsecase = new AppointmentsUsecase(appointmentRepository);
  const sut = new CreateAppointmentService(
    appointmentRepository,
    appointmentsUsecase
  );

  return { appointmentRepository, appointmentsUsecase, sut };
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
      description: 'A really good place',
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

  it('should NOT be able to create a new appointment with an invalid userId', () => {
    const response = sut.handle({
      date: new Date(),
      userId: 'InvalidID',
      barberId: barber.id,
    });

    expect(response).rejects.toThrowError();
  });

  it('should NOT be able to create a new appointment with an invalid barberId', () => {
    const response = sut.handle({
      date: new Date(),
      userId: user.id,
      barberId: 'InvalidID',
    });

    expect(response).rejects.toThrowError();
  });

  it('should NOT be able to create a new appointment with an invalid date', () => {
    const appointment = Appointment.create({
      date: new Date(),
      userId: user.id,
      barberId: barber.id,
    });

    appointmentRepository.appointment.push(appointment);

    const response = sut.handle({
      date: new Date(),
      userId: user.id,
      barberId: barber.id,
    });

    expect(response).rejects.toThrowError();
  });

  it('should NOT be able to create a new appointment in a past date', () => {
    const response = sut.handle({
      date: Date.UTC(2022, 3) as unknown as Date,
      userId: user.id,
      barberId: barber.id,
    });

    expect(response).rejects.toThrowError();
  });
});
