import { Router } from 'express';
import multer from 'multer';

import ViewUserProfileController from '@controllers/users/view-user-profile-controller';
import CreateUserController from '@controllers/users/create-user-controller';
import DeleteUserController from '@controllers/users/delete-user-controller';

import { sessionRouter } from './session.routes';
import { profileRouter } from './profile.routes';

import uploadConfig from '@core/config/upload';

import ensureAuthenticated from '../../middlewares/ensure-authenticated';

const userRouter = Router();
const upload = multer(uploadConfig.multer);

const viewUserProfileController = new ViewUserProfileController();
const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();

userRouter.use('/session', sessionRouter);
userRouter.use('/profile', ensureAuthenticated, profileRouter);

userRouter.get('/:id', ensureAuthenticated, viewUserProfileController.execute);
userRouter.post('/', upload.single('avatar'), createUserController.execute);
userRouter.delete('/:id', ensureAuthenticated, deleteUserController.execute);

export default userRouter;
