import { Router } from 'express';

import AuthenticateUserController from '@controllers/users/authenticate-user-controller';

export const sessionRouter = Router();

const authenticateUserController = new AuthenticateUserController();

sessionRouter.post('/', authenticateUserController.execute);
