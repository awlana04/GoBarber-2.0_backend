import AppointmentRepository from '@repositories/appointment-repository';
import CreateAppointmentService from '@services/appointments/create-appointment-service';

import AppointmentsUsecase from '@usecases/implementations/appointment-usecase';

const CreateAppointmentFactory = () => {
  const appointmentRepository = new AppointmentRepository();
  const appointmentService = new AppointmentsUsecase(appointmentRepository);

  return new CreateAppointmentService(
    appointmentRepository,
    appointmentService
  );
};

export default CreateAppointmentFactory;
