import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ViewAppointmentController from '../controllers/ViewAppointmentController';
import GetAllAppointmentsController from '../controllers/GetAllAppointmentsController';
import CreateAppointmentController from '../controllers/CreateAppointmentController';
import UpdateAppointmentController from '../controllers/UpdateAppointmentController';
import DeleteAppointmentController from '../controllers/DeleteAppointmentController';

import ensureAuthenticated from '../../../../../shared/infra/http/middlewares/ensureAuthenticated';

const appointmentRouter = Router();

const viewAppointment = new ViewAppointmentController();
const getAllAppointments = new GetAllAppointmentsController();
const createAppointment = new CreateAppointmentController();
const updateAppointment = new UpdateAppointmentController();
const deleteAppointment = new DeleteAppointmentController();

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
