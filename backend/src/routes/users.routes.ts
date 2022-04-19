import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import multer from 'multer';

import { GetUserController } from '../controllers/users/GetUserController';
import { CreateUserController } from '../controllers/users/CreateUserController';
import { AuthenticateController } from '../controllers/users/AuthenticateController';
import { UpdateUserController } from '../controllers/users/UpdateUserController';
import { DeleteUserController } from '../controllers/users/DeleteUserController';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import uploadConfig from '../config/upload';

const usersRouter = Router();
const upload = multer(uploadConfig);

const getUser = new GetUserController();
const createUser = new CreateUserController();
const authenticate = new AuthenticateController();
const updateUser = new UpdateUserController();
const deleteUser = new DeleteUserController();

usersRouter.get(
  '/user/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
  ensureAuthenticated,
  getUser.execute
);

usersRouter.post(
  '/user',
  // celebrate({
  //   [Segments.BODY]: {
  //     name: Joi.string().required(),
  //     email: Joi.string().email().required(),
  //     password: Joi.string().min(8).required(),
  //     avatar: Joi.string(),
  //     location: Joi.string().required(),
  //   },
  // }),
  upload.single('avatar'),
  createUser.execute
);

usersRouter.patch('/', upload.single('avatar'), createUser.execute);

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
  '/user/:id',
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

usersRouter.delete(
  '/user/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
  ensureAuthenticated,
  deleteUser.execute
);

export default usersRouter;
