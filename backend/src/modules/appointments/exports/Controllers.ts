import ViewAppointmentController from '../infra/http/controllers/ViewAppointmentController';
import GetAllAppointmentsController from '../infra/http/controllers/GetAllAppointmentsController';
import CreateAppointmentController from '../infra/http/controllers/CreateAppointmentController';
import UpdateAppointmentController from '../infra/http/controllers/UpdateAppointmentController';
import DeleteAppointmentController from '../infra/http/controllers/DeleteAppointmentController';

import {
  viewAppointmentService,
  getAllAppointmentsService,
  createAppointmentService,
  updateAppointmentService,
  deleteAppointmentService,
} from './Services';

const viewAppointment = new ViewAppointmentController(viewAppointmentService);

const getAllAppointments = new GetAllAppointmentsController(
  getAllAppointmentsService
);

const createAppointment = new CreateAppointmentController(
  createAppointmentService
);

const updateAppointment = new UpdateAppointmentController(
  updateAppointmentService
);

const deleteAppointment = new DeleteAppointmentController(
  deleteAppointmentService
);

export {
  viewAppointment,
  getAllAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment,
};
