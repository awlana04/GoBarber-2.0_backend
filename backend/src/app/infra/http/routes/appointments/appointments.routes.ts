import { Router } from 'express';

import CreateAppointmentController from '@controllers/appointments/create-appointment-controller';

import ensureAuthenticated from '../../middlewares/ensure-authenticated';

const appointmentsRouter = Router();

const createAppointmentController = new CreateAppointmentController();

appointmentsRouter.post(
  '/:id',
  ensureAuthenticated,
  createAppointmentController.execute
);

export default appointmentsRouter;
