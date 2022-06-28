import { Router } from 'express';
import multer from 'multer';

import CreateUserController from '@controllers/users/create-user-controller';

import uploadConfig from '@core/config/upload';

const createUserController = new CreateUserController();

const userRouter = Router();
const upload = multer(uploadConfig.multer);

userRouter.post('/', upload.single('avatar'), createUserController.execute);

export default userRouter;
