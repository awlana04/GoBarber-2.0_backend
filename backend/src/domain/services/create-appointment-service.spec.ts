import CreateAppointmentService from './create-appointment-service';

import InMemoryAppointmentsRepository from '../../../tests/repositories/InMemoryAppointmentsRepository';

import User from '../entities/user';
import Barber from '../entities/barber';
import Appointment from '../entities/appointment';

describe('Create appointment service', () => {
  it('should be able to create a new appointment', async () => {
    const appointmentRepository = new InMemoryAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      appointmentRepository
    );

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

    const response = await createAppointment.handle({
      date: appointment.props.date,
      userId: appointment.props.userId,
      barberId: appointment.props.barberId,
    });

    expect(response).toBeTruthy();
  });
});
