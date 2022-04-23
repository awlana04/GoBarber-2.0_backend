import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import multer from 'multer';

import ViewUserProfileController from '../controllers/ViewUserProfileController';
import CreateUserController from '../controllers/CreateUserController';
import DeleteUserController from '../controllers/DeleteUserController';

import { profileRouter } from './profile.routes';
import { sessionRouter } from './session.routes';

import uploadConfig from '../../../../../config/upload';

import ensureAuthenticated from '../../../../../shared/infra/http/middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig.multer);

const viewProfile = new ViewUserProfileController();
const createUser = new CreateUserController();
const deleteUser = new DeleteUserController();

usersRouter.use('/profile', ensureAuthenticated, profileRouter);
usersRouter.use('/session', sessionRouter);

usersRouter.get(
  '/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
  ensureAuthenticated,
  viewProfile.execute
);

usersRouter.post('/', upload.single('avatar'), createUser.execute);

usersRouter.delete(
  '/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
  ensureAuthenticated,
  deleteUser.execute
);

export { usersRouter };
