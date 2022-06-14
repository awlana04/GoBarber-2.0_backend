import InMemoryAppointmentsRepository from '@in-memory/in-memory-appointments-repository';
import AppointmentsUsecase from './appointments-usecase';

import User from '@entities/user';
import Barber from '@entities/barber';
import Appointment from '@entities/appointment';

type SutOutput = {
  appointmentsRepository: InMemoryAppointmentsRepository;
  sut: AppointmentsUsecase;
};

const makeSut = (): SutOutput => {
  const appointmentsRepository = new InMemoryAppointmentsRepository();
  const sut = new AppointmentsUsecase(appointmentsRepository);

  return { appointmentsRepository, sut };
};

describe('Appointments usecase', () => {
  const { appointmentsRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
  }).value as User;

  const barber = Barber.create({
    name: 'John Doe Barber',
    description: 'A Really Good Place',
    location: 'Somewhere Over the Pocket',
    openOnWeekends: true,
    openAtNight: true,
    userId: user.id,
  }).value as Barber;

  const appointment = Appointment.create({
    date: new Date(),
    userId: user.id,
    barberId: barber.id,
  });

  appointmentsRepository.user.push(user);
  appointmentsRepository.barber.push(barber);
  appointmentsRepository.appointment.push(appointment);

  it('should not be able to find an user', () => {
    const response = sut.checkUserExists('invalidID');

    expect(response).rejects.toThrowError();
  });

  it('should be able to find an user', async () => {
    const response = await sut.checkUserExists(user.id);

    expect(response).toBeNull();
  });

  it('should not be able to find a barber', () => {
    const response = sut.checkBarberExists('invalidID');

    expect(response).rejects.toThrowError();
  });

  it('should be able to find a barber', async () => {
    const response = await sut.checkBarberExists(barber.id);

    expect(response).toBeNull();
  });

  it('should not be able to make a new appointment (appointment already booked)', () => {
    const response = sut.checkIsValidDate(appointment.date, barber.id);

    expect(response).rejects.toThrowError();
  });

  it('should not be able to make a new appointment (past date)', () => {
    const response = sut.checkIsValidDate(
      Date.UTC(2022, 3) as unknown as Date,
      barber.id
    );

    expect(response).rejects.toThrowError();
  });

  it('should not be able to make a new appointemnt (barber does not exists)', () => {
    const response = sut.checkIsValidDate(new Date(), 'invalidID');

    expect(response).rejects.toThrowError();
  });

  it('should be able to make a new appointment', async () => {
    const response = await sut.checkIsValidDate(
      Date.UTC(2026, 3) as unknown as Date,
      barber.id
    );

    expect(response).toBeNull();
  });

  it('should not be able to find an appointment', () => {
    const response = sut.checkAppointmentExists('invalidID');

    expect(response).rejects.toThrowError();
  });

  it('should be able to find an appointment', async () => {
    const response = await sut.checkAppointmentExists(appointment.id);

    expect(response).toBeNull();
  });
});
