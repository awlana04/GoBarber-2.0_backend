import AppointmentRepository from '@repositories/appointment-repository';
import AppointmentsUsecase from '@usecases/implementations/appointment-usecase';
import BookedInAPastDateAdapter from '@adapters/implementations/booked-in-a-past-date-adapter';

import CreateAppointmentService from '@services/appointments/create-appointment-service';
import ViewAppointmentService from '@services/appointments/view-appointment-service';
import GetAllAppointmentsService from '@services/appointments/get-all-appointments-service';

const CreateAppointmentFactory = () => {
  const appointmentRepository = new AppointmentRepository();
  const appointmentUsecase = new AppointmentsUsecase(appointmentRepository);
  const bookedInAPastDateAdapter = new BookedInAPastDateAdapter();

  const createAppointmentService = new CreateAppointmentService(
    appointmentRepository,
    appointmentUsecase,
    bookedInAPastDateAdapter
  );

  const viewAppointmentService = new ViewAppointmentService(
    appointmentRepository
  );

  const getAllAppointmentsService = new GetAllAppointmentsService(
    appointmentRepository,
    appointmentUsecase
  );

  return {
    createAppointmentService,
    viewAppointmentService,
    getAllAppointmentsService,
  };
};

export default CreateAppointmentFactory;
