import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { CreateUserController } from '../controllers/users/CreateUserController';
import { AuthenticateController } from '../controllers/users/AuthenticateController';
import { UpdateUserController } from '../controllers/users/UpdateUserController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const usersRouter = Router();

const createUser = new CreateUserController();
const authenticate = new AuthenticateController();
const updateUser = new UpdateUserController();

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

usersRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: { id: Joi.string().required() },
    [Segments.BODY]: {
      name: Joi.string(),
      avatar: Joi.string(),
      location: Joi.string(),
      password: Joi.string(),
    },
  }),
  ensureAuthenticated,
  updateUser.execute
);

export default usersRouter;
