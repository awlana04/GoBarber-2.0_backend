import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { CreateAppointmentController } from '../controllers/appointments/CreateAppointmentController';
import { GetAnAppointmentController } from '../controllers/appointments/GetAnAppointmentComtroller';
import { FindAllAppointmentsController } from '../controllers/appointments/FindAllAppointmentsController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

const createAppointment = new CreateAppointmentController();
const getAnAppointment = new GetAnAppointmentController();
const findAllAppointments = new FindAllAppointmentsController();

appointmentsRouter.get(
  '/appointments/:id',
  ensureAuthenticated,
  getAnAppointment.execute
);
appointmentsRouter.get(
  '/barber/appointments/:id',
  ensureAuthenticated,
  findAllAppointments.execute
);

appointmentsRouter.post(
  '/appointment/:id',
  celebrate({
    [Segments.BODY]: {
      date: Joi.date().required(),
      barberId: Joi.string().required(),
    },
  }),
  ensureAuthenticated,
  createAppointment.execute
);

export default appointmentsRouter;
