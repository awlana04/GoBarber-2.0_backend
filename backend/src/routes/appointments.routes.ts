import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { GetAnAppointmentController } from '../controllers/appointments/GetAnAppointmentComtroller';
import { FindAllAppointmentsController } from '../controllers/appointments/FindAllAppointmentsController';
import { CreateAppointmentController } from '../controllers/appointments/CreateAppointmentController';
import { UpdateAppointmentController } from '../controllers/appointments/UpdateAppointmentController';
import { DeleteAppointmentController } from '../controllers/appointments/DeleteAppointmentController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const appointmentsRouter = Router();

const getAnAppointment = new GetAnAppointmentController();
const findAllAppointments = new FindAllAppointmentsController();
const createAppointment = new CreateAppointmentController();
const updateAppointmnet = new UpdateAppointmentController();
const deleteAppointment = new DeleteAppointmentController();

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

appointmentsRouter.put(
  '/appointment/:id',
  celebrate({
    [Segments.PARAMS]: { id: Joi.string().required() },
    [Segments.BODY]: {
      date: Joi.date().required(),
    },
  }),
  ensureAuthenticated,
  updateAppointmnet.execute
);

appointmentsRouter.delete(
  '/appointment/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
  ensureAuthenticated,
  deleteAppointment.execute
);

export default appointmentsRouter;
