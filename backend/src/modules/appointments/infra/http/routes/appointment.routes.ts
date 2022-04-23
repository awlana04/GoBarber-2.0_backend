import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import {
  viewAppointment,
  getAllAppointments,
  createAppointment,
  updateAppointment,
  deleteAppointment,
} from '../../../exports/Controllers';

import ensureAuthenticated from '../../../../../shared/infra/http/middlewares/ensureAuthenticated';

const appointmentRouter = Router();

appointmentRouter.get(
  '/users/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
  ensureAuthenticated,
  viewAppointment.execute
);

appointmentRouter.get(
  '/barbers/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
  ensureAuthenticated,
  getAllAppointments.execute
);

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

appointmentRouter.put(
  '/update/:id',
  celebrate({
    [Segments.PARAMS]: { id: Joi.string().required() },
    [Segments.BODY]: { date: Joi.date().required() },
  }),
  ensureAuthenticated,
  updateAppointment.execute
);

appointmentRouter.delete(
  '/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
  ensureAuthenticated,
  deleteAppointment.execute
);

export { appointmentRouter };
