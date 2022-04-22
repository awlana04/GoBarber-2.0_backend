import { Router } from 'express';
import multer from 'multer';

import ViewUserProfileController from '../controllers/ViewUserProfileController';
import CreateUserController from '../controllers/CreateUserController';

import { profileRouter } from './profile.routes';
import { sessionRouter } from './session.routes';

import uploadConfig from '../../../../../config/upload';

import ensureAuthenticated from '../../../../../shared/infra/http/middlewares/ensureAuthenticated';

const usersRouter = Router();
const upload = multer(uploadConfig);

const viewProfile = new ViewUserProfileController();
const createUser = new CreateUserController();

usersRouter.use('/profile', ensureAuthenticated, profileRouter);
usersRouter.use('/session', sessionRouter);

usersRouter.get('/:id', ensureAuthenticated, viewProfile.execute);
usersRouter.post('/', upload.single('avatar'), createUser.execute);

export { usersRouter };
