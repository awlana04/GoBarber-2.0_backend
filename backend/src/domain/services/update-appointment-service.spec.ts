import InMemoryAppointmentsRepository from '../../../tests/repositories/InMemoryAppointmentsRepository';
import UpdateAppointmentService from './update-appointment-service';

import User from '../entities/user';
import Barber from '../entities/barber';
import Appointment from '../entities/appointment';

type SutOutput = {
  appointmentRepository: InMemoryAppointmentsRepository;
  sut: UpdateAppointmentService;
};

const makeSut = (): SutOutput => {
  const appointmentRepository = new InMemoryAppointmentsRepository();
  const sut = new UpdateAppointmentService(appointmentRepository);

  return { appointmentRepository, sut };
};

describe('Update appointment service', () => {
  it('should be able to update the appointment', async () => {
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

    const response = await sut.handle({
      id: appointment.id,
      date: new Date(),
    });

    expect(response).toBeDefined();
  });

  it('should NOT be able to update the appointment with an invalid id', () => {
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
      id: 'invalidID',
      date: new Date(),
    });

    expect(response).rejects.toThrowError();
  });
});
