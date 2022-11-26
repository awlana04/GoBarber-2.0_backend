import AppointmentRepository from '@repositories/appointment-repository';
import AppointmentsUsecase from '@usecases/implementations/appointment-usecase';
import BookedInAPastDateAdapter from '@adapters/implementations/booked-in-a-past-date-adapter';

import CreateAppointmentService from '@services/appointments/create-appointment-service';
import ViewAppointmentService from '@services/appointments/view-appointment-service';

const CreateAppointmentFactory = () => {
  const appointmentRepository = new AppointmentRepository();
  const appointmentService = new AppointmentsUsecase(appointmentRepository);
  const bookedInAPastDateAdapter = new BookedInAPastDateAdapter();

  const createAppointmentService = new CreateAppointmentService(
    appointmentRepository,
    appointmentService,
    bookedInAPastDateAdapter
  );

  const viewAppointmentService = new ViewAppointmentService(
    appointmentRepository
  );

  return {
    createAppointmentService,
    viewAppointmentService,
  };
};

export default CreateAppointmentFactory;
