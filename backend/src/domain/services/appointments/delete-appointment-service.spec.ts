import crypto from 'crypto';

import InMemoryAppointmentsRepository from '@in-memory/in-memory-appointments-repository';
import AppointmentsUsecase from '@usecases/implementations/appointments-usecase';
import DeleteAppointmentService from './delete-appointment-service';

import User from '@entities/user';
import Barber from '@entities/barber';
import Appointment from '@entities/appointment';

type SutOutput = {
  appointmentsRepository: InMemoryAppointmentsRepository;
  appointmentsUsecase: AppointmentsUsecase;
  sut: DeleteAppointmentService;
};

const makeSut = (): SutOutput => {
  const appointmentsRepository = new InMemoryAppointmentsRepository();
  const appointmentsUsecase = new AppointmentsUsecase(appointmentsRepository);
  const sut = new DeleteAppointmentService(
    appointmentsRepository,
    appointmentsUsecase
  );

  return { appointmentsRepository, appointmentsUsecase, sut };
};

describe('Delete appointment service', () => {
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
    description: 'A really good place',
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

  it('should NOT be able to delete an appointment with an invalod id', () => {
    const response = sut.handle('invalidID');

    expect(response).rejects.toThrowError();
  });

  it('should be able to delete an appointment', async () => {
    const response = await sut.handle(appointment.id);

    expect(response.id).toEqual(appointment.id);
    expect(response).toEqual(appointment);

    expect(response).toBeInstanceOf(Appointment);
  });
});
