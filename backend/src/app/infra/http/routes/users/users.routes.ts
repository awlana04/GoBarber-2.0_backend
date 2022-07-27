import { Router } from 'express';
import multer from 'multer';

import CreateUserController from '@controllers/users/create-user-controller';

import uploadConfig from '@core/config/upload';

const userRouter = Router();
const upload = multer(uploadConfig.multer);

const createUserController = new CreateUserController();

userRouter.post('/', upload.single('avatar'), createUserController.execute);

export default userRouter;
