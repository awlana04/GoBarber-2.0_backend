import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { CreateUserController } from '../controllers/CreateUserController';
import { CreateBarberController } from '../controllers/CreateBarberController';
import { CreateAppointmentController } from '../controllers/CreateAppointmentController';

const router = Router();

const createUser = new CreateUserController();
const createBarber = new CreateBarberController();
const createAppointment = new CreateAppointmentController();

router.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
      avatar: Joi.string(),
      location: Joi.string().required(),
    },
  }),
  createUser.handle
);

router.post(
  '/barber/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      location: Joi.string().required(),
      description: Joi.string().max(256).required(),
      images: Joi.string().required(),
      openAtNight: Joi.boolean(),
      openOnWeekends: Joi.boolean(),
    },
  }),
  createBarber.execute
);

router.post(
  '/appointment',
  celebrate({
    [Segments.BODY]: {
      time: Joi.binary().required(),
      date: Joi.binary().required(),
      userId: Joi.string().required(),
      barberId: Joi.string().required(),
    },
  }),
  createAppointment.execute
);

export { router };
