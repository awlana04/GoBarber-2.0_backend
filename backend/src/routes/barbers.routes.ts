import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { GetBarberController } from '../controllers/barbers/GetBarberController';
import { GetAllBarbersController } from '../controllers/barbers/GetAllBarbersController';
import { CreateBarberController } from '../controllers/barbers/CreateBarberController';
import { UpdateBarberController } from '../controllers/barbers/UpdateBarberController';
import { UpdateBarberUserController } from '../controllers/barbers/UpdateBarberUserController';
import { DeleteBarberController } from '../controllers/barbers/DeleteBarberController';
import { DeleteBarberAndUserController } from '../controllers/barbers/DeleteBarberAndUserAppointmentController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const barberRouter = Router();

const getBarber = new GetBarberController();
const getAllBarbers = new GetAllBarbersController();
const createBarber = new CreateBarberController();
const updateBarber = new UpdateBarberController();
const updateBarberUserController = new UpdateBarberUserController();
const deleteBarber = new DeleteBarberController();
const deleteBarberAndUser = new DeleteBarberAndUserController();

barberRouter.get(
  '/barbers/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
  ensureAuthenticated,
  getBarber.execute
);

barberRouter.get('/barbers', ensureAuthenticated, getAllBarbers.execute);

barberRouter.post(
  '/barber/:id',
  celebrate({
    [Segments.PARAMS]: { id: Joi.string().required() },
    [Segments.BODY]: {
      name: Joi.string().required(),
      location: Joi.string().required(),
      description: Joi.string().max(256).required(),
      images: Joi.string().required(),
      openAtNight: Joi.boolean(),
      openOnWeekends: Joi.boolean(),
    },
  }),
  ensureAuthenticated,
  createBarber.execute
);

barberRouter.put(
  '/barber/:id',
  celebrate({
    [Segments.PARAMS]: { id: Joi.string().required() },
    [Segments.BODY]: {
      name: Joi.string(),
      location: Joi.string(),
      description: Joi.string(),
      images: Joi.string(),
      openAtNight: Joi.boolean(),
      openOnWeekends: Joi.boolean(),
    },
  }),
  ensureAuthenticated,
  updateBarber.execute
);

barberRouter.put(
  '/user/barber/:id',
  celebrate({
    [Segments.PARAMS]: { id: Joi.string().required() },
    [Segments.BODY]: {
      name: Joi.string(),
      avatar: Joi.string(),
      password: Joi.string(),
    },
  }),
  ensureAuthenticated,
  updateBarberUserController.execute
);

barberRouter.delete(
  '/barber/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
  ensureAuthenticated,
  deleteBarber.execute
);

barberRouter.delete(
  '/user/barber/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
  ensureAuthenticated,
  deleteBarberAndUser.execute
);

export default barberRouter;
