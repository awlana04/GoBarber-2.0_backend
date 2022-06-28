import { Router } from 'express';

import userRouter from './users/users.routes';

const routes = Router();

routes.use('/users', userRouter);

export default routes;
