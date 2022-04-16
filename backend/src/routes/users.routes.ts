import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { CreateUserController } from '../controllers/users/CreateUserController';

const usersRouter = Router();

const createUser = new CreateUserController();

usersRouter.post(
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

export default usersRouter;
