import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { CreateAppointmentController } from '../controllers/appointments/CreateAppointmentController';
import { GetAnAppointmentController } from '../controllers/appointments/GetAnAppointmentComtroller';
import { FindAllAppointmentsController } from '../controllers/appointments/FindAllAppointmentsController';

import authMiddleware from '../middlewares/authMiddleware';

const appointmentsRouter = Router();

const createAppointment = new CreateAppointmentController();
const getAnAppointment = new GetAnAppointmentController();
const findAllAppointments = new FindAllAppointmentsController();

appointmentsRouter.get(
  '/appointments/:id',
  authMiddleware,
  getAnAppointment.execute
);
appointmentsRouter.get(
  '/barber/appointments/:id',
  authMiddleware,
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
  authMiddleware,
  createAppointment.execute
);

export default appointmentsRouter;
