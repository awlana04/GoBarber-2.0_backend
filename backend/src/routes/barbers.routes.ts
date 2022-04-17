import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { GetBarberController } from '../controllers/barbers/GetBarberController';
import { GetAllBarbersController } from '../controllers/barbers/GetAllBarbersController';
import { CreateBarberController } from '../controllers/barbers/CreateBarberController';
import { UpdateBarberController } from '../controllers/barbers/UpdateBarberController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const barberRouter = Router();

const getBarber = new GetBarberController();
const getAllBarbers = new GetAllBarbersController();
const createBarber = new CreateBarberController();
const updateBarber = new UpdateBarberController();

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
      userName: Joi.string(),
      avatar: Joi.string(),
      password: Joi.string(),
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

export default barberRouter;
