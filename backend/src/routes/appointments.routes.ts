import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { GetAnAppointmentController } from '../controllers/appointments/GetAnAppointmentComtroller';
import { FindAllAppointmentsController } from '../controllers/appointments/FindAllAppointmentsController';
import { CreateAppointmentController } from '../controllers/appointments/CreateAppointmentController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

const getAnAppointment = new GetAnAppointmentController();
const findAllAppointments = new FindAllAppointmentsController();
const createAppointment = new CreateAppointmentController();

appointmentsRouter.get(
  '/appointments/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
  ensureAuthenticated,
  getAnAppointment.execute
);
appointmentsRouter.get(
  '/barber/appointments/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
  ensureAuthenticated,
  findAllAppointments.execute
);

appointmentsRouter.post(
  '/appointment/:id',
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

export default appointmentsRouter;
