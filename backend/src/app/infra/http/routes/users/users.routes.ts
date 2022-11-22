import { Router } from 'express';
import multer from 'multer';

import ViewUserProfileController from '@controllers/users/view-user-profile-controller';
import CreateUserController from '@controllers/users/create-user-controller';
import AuthenticateUserController from '@controllers/users/authenticate-user-controller';
import DeleteUserController from '@controllers/users/delete-user-controller';

import { profileRouter } from './profile.routes';

import uploadConfig from '@core/config/upload';

import ensureAuthenticated from '../../middlewares/ensure-authenticated';

const userRouter = Router();
const upload = multer(uploadConfig.multer);

const viewUserProfileController = new ViewUserProfileController();
const createUserController = new CreateUserController();
const authenticaUserController = new AuthenticateUserController();
const deleteUserController = new DeleteUserController();

userRouter.use('/profile', ensureAuthenticated, profileRouter);

userRouter.get('/:id', ensureAuthenticated, viewUserProfileController.execute);
userRouter.post('/', upload.single('avatar'), createUserController.execute);
userRouter.post('/session', authenticaUserController.execute);
userRouter.delete('/:id', ensureAuthenticated, deleteUserController.execute);

export default userRouter;
