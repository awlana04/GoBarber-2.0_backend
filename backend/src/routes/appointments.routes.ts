import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { CreateAppointmentController } from '../controllers/appointments/CreateAppointmentController';

const appointmentsRouter = Router();

const createAppointment = new CreateAppointmentController();

appointmentsRouter.post(
  '/appointment/:id',
  celebrate({
    [Segments.BODY]: {
      date: Joi.date().required(),
      barberId: Joi.string().required(),
    },
  }),
  createAppointment.execute
);

export default appointmentsRouter;
