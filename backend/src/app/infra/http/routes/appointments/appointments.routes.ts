import { Router } from 'express';

import CreateAppointmentController from '@controllers/appointments/create-appointment-controller';
import ViewAppointmentController from '@controllers/appointments/view-appointment-controller';

import ensureAuthenticated from '../../middlewares/ensure-authenticated';

const appointmentsRouter = Router();

const createAppointmentController = new CreateAppointmentController();
const viewAppointmentController = new ViewAppointmentController();

appointmentsRouter.get(
  '/:id',
  ensureAuthenticated,
  viewAppointmentController.execute
);
appointmentsRouter.post(
  '/:id',
  ensureAuthenticated,
  createAppointmentController.execute
);

export default appointmentsRouter;
