import { Router } from 'express';
import multer from 'multer';

import CreateUserController from '../controllers/CreateUserController';
import AuthenticateController from '../controllers/AuthenticateController';

import uploadConfig from '../../../../../config/upload';

const usersRouter = Router();
const upload = multer(uploadConfig);

const createUser = new CreateUserController();
const createAuthentication = new AuthenticateController();

usersRouter.post('/', upload.single('avatar'), createUser.execute);

usersRouter.post('/session', createAuthentication.execute);

export { usersRouter };
