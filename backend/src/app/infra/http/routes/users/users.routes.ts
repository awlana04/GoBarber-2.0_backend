import { Router } from 'express';
import multer from 'multer';

import AuthenticateUserController from '@controllers/users/authenticate-user-controller';
import CreateUserController from '@controllers/users/create-user-controller';

import uploadConfig from '@core/config/upload';

const userRouter = Router();
const upload = multer(uploadConfig.multer);

const authenticaUserController = new AuthenticateUserController();
const createUserController = new CreateUserController();

userRouter.post('/session', authenticaUserController.execute);
userRouter.post('/', upload.single('avatar'), createUserController.execute);

export default userRouter;
