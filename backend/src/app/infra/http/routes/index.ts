import { Router } from 'express';

import userRouter from './users/users.routes';
import barbersRouter from './barbers/barbers.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/barbers', barbersRouter);

export default routes;
