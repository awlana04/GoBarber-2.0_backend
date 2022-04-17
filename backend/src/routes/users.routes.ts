import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { CreateUserController } from '../controllers/users/CreateUserController';
import { AuthenticateController } from '../controllers/users/AuthenticateController';

const usersRouter = Router();

const createUser = new CreateUserController();
const authenticate = new AuthenticateController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().min(8).required(),
      avatar: Joi.string(),
      location: Joi.string().required(),
    },
  }),
  createUser.execute
);

usersRouter.post(
  '/authenticate',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  authenticate.authenticate
);

export default usersRouter;
