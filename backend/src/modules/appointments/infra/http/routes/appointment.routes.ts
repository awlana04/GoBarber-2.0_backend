import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import CreateAppointmentController from '../controllers/CreateAppointmentController';

import ensureAuthenticated from '../../../../../shared/infra/http/middlewares/ensureAuthenticated';

const appointmentRouter = Router();

const createAppointment = new CreateAppointmentController();

appointmentRouter.post(
  '/:id',
  celebrate({
    [Segments.PARAMS]: { id: Joi.string().required() },
    [Segments.BODY]: {
      date: Joi.date().required(),
      barberId: Joi.string().required(),
    },
  }),
  ensureAuthenticated,
  createAppointment.execute
);

export { appointmentRouter };
