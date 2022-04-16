import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { CreateUserController } from '../controllers/CreateUserController';
import { CreateBarberController } from '../controllers/CreateBarberController';

const router = Router();

const createUser = new CreateUserController();
const createBarber = new CreateBarberController();

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

export { router };
