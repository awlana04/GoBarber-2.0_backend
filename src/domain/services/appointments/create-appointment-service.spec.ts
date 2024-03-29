import InMemoryAppointmentsRepository from '@in-memory/in-memory-appointments-repository';
import CreateAppointmentService from './create-appointment-service';
import AppointmentsUsecase from '@usecases/implementations/appointment-usecase';
import BookedInAPastDateAdapter from '@adapters/implementations/booked-in-a-past-date-adapter';

import User from '@entities/user';
import Barber from '@entities/barber';

type SutOutput = {
  appointmentRepository: InMemoryAppointmentsRepository;
  sut: CreateAppointmentService;
};

const makeSut = (): SutOutput => {
  const appointmentRepository = new InMemoryAppointmentsRepository();
  const appointmentsUsecase = new AppointmentsUsecase(appointmentRepository);
  const bookedInAPastDateAdapter = new BookedInAPastDateAdapter();

  const sut = new CreateAppointmentService(
    appointmentRepository,
    appointmentsUsecase,
    bookedInAPastDateAdapter
  );

  return { appointmentRepository, sut };
};

describe('Create appointment service', () => {
  const { appointmentRepository, sut } = makeSut();

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

  appointmentRepository.user.push(user);
  appointmentRepository.barber.push(barber);

  it('should be able to create a new appointment', async () => {
    const date = new Date();

    const response = await sut.handle({
      date,
      userId: user.id,
      barberId: barber.id,
    });

    expect(response.value).toBeDefined();
  });
});
