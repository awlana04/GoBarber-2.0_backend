import ViewAppointmentService from '../services/ViewAppointmentService';
import GetAllAppointmentsService from '../services/GetAllAppointmentsService';
import CreateAppointmentService from '../services/CreateAppointmentService';
import UpdateAppointmentService from '../services/UpdateAppointmentService';
import DeleteAppointmentService from '../services/DeleteAppointmentService';

import AppointmentRepository from '../infra/prisma/repositories/AppointmentRepository';
import AppointmentProvider from '../providers/implementations/AppointmentProvider';

const appointmentRepository = new AppointmentRepository();
const appointmentProiver = new AppointmentProvider(appointmentRepository);

const viewAppointmentService = new ViewAppointmentService(
  appointmentRepository
);

const getAllAppointmentsService = new GetAllAppointmentsService(
  appointmentRepository
);

const createAppointmentService = new CreateAppointmentService(
  appointmentRepository,
  appointmentProiver
);

const updateAppointmentService = new UpdateAppointmentService(
  appointmentRepository,
  appointmentProiver
);

const deleteAppointmentService = new DeleteAppointmentService(
  appointmentRepository
);

export {
  viewAppointmentService,
  getAllAppointmentsService,
  createAppointmentService,
  updateAppointmentService,
  deleteAppointmentService,
};
