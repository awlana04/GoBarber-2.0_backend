import { Router } from 'express';
import multer from 'multer';

import CreateUserController from '../controllers/CreateUserController';

import uploadConfig from '../../../../../config/upload';

const usersRouter = Router();
const upload = multer(uploadConfig);

const createUser = new CreateUserController();

usersRouter.post('/', upload.single('avatar'), createUser.execute);

export { usersRouter };
