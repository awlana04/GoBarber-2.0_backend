import InMemoryAppointmentsRepository from './in-memory-appointments-repository';

import User from '@entities/user';
import Barber from '@entities/barber';
import Appointment from '@entities/appointment';

describe('In memory appointment repository', () => {
  const appointmentRepository = new InMemoryAppointmentsRepository();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
    avatar: 'avatar.png',
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

  appointmentRepository.user.push(user);
  appointmentRepository.barber.push(barber);
  appointmentRepository.appointment.push(appointment);

  it('should be able to find an appointment by id', async () => {
    const response = await appointmentRepository.findById(appointment.id);

    expect(response!.id).toEqual(appointment.id);
  });

  it('should be able to find an user id', async () => {
    const response = await appointmentRepository.findUserId(user.id);

    expect(response?.id).toEqual(user.id);
  });

  it('should be able to find a barber id', async () => {
    const response = await appointmentRepository.findBarberId(barber.id);

    expect(response!.id).toEqual(barber.id);
  });

  it('should be able to find an appointment by date', async () => {
    const response = await appointmentRepository.findByDate(
      appointment.date as unknown as Date,
      barber.id
    );

    expect(response!.date).toEqual(appointment.date);
    expect(response!.barberId.value).toEqual(appointment.barberId.value);
  });

  it('should be able to find all appointments', async () => {
    const response = await appointmentRepository.findAllAppointments(barber.id);

    expect(response).toBeDefined();
  });

  it('should be able to save a new appointment', async () => {
    const response = await appointmentRepository.save({
      date: new Date(),
      userId: user.id,
      barberId: barber.id,
    });

    expect(response).toBeDefined();
  });

  it('should be able to update an appointment', async () => {
    const date = new Date();

    const response = await appointmentRepository.update(appointment.id, date);

    expect(response).toBeDefined();
  });

  it('should be able to delete an appointment', async () => {
    const response = await appointmentRepository.delete(appointment.id);

    expect(response).toBeDefined();
  });
});
