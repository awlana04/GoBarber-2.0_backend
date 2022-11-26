import { Router } from 'express';

import CreateAppointmentController from '@controllers/appointments/create-appointment-controller';
import ViewAppointmentController from '@controllers/appointments/view-appointment-controller';
import GetAllAppointmentsController from '@controllers/appointments/get-all-appointments-controller';

import ensureAuthenticated from '../../middlewares/ensure-authenticated';

const appointmentsRouter = Router();

const createAppointmentController = new CreateAppointmentController();
const viewAppointmentController = new ViewAppointmentController();
const getAllAppointmentsController = new GetAllAppointmentsController();

appointmentsRouter.get(
  '/:id',
  ensureAuthenticated,
  viewAppointmentController.execute
);
appointmentsRouter.get(
  '/all/:id',
  ensureAuthenticated,
  getAllAppointmentsController.execute
);
appointmentsRouter.post(
  '/:id',
  ensureAuthenticated,
  createAppointmentController.execute
);

export default appointmentsRouter;
