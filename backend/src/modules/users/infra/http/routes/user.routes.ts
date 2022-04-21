import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import multer from 'multer';

import CreateUserController from '../controllers/CreateUserController';
import AuthenticateController from '../controllers/AuthenticateController';

import uploadConfig from '../../../../../config/upload';

const usersRouter = Router();
const upload = multer(uploadConfig);

const createUser = new CreateUserController();
const createAuthentication = new AuthenticateController();

usersRouter.post('/', upload.single('avatar'), createUser.execute);

usersRouter.post(
  '/session',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().min(8).required(),
    },
  }),
  createAuthentication.execute
);

export { usersRouter };
