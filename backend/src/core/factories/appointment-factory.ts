import AppointmentRepository from '@repositories/appointment-repository';
import CreateAppointmentService from '@services/appointments/create-appointment-service';
import AppointmentsUsecase from '@usecases/implementations/appointment-usecase';
import BookedInAPastDateAdapter from '@adapters/implementations/booked-in-a-past-date-adapter';

const CreateAppointmentFactory = () => {
  const appointmentRepository = new AppointmentRepository();
  const appointmentService = new AppointmentsUsecase(appointmentRepository);
  const bookedInAPastDateAdapter = new BookedInAPastDateAdapter();

  return new CreateAppointmentService(
    appointmentRepository,
    appointmentService,
    bookedInAPastDateAdapter
  );
};

export default CreateAppointmentFactory;
