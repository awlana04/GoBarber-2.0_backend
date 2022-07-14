import { Router } from 'express';

import userRouter from './users/users.routes';
import barbersRouter from './barbers/barbers.routes';
import refreshTokensRouter from './refresh-tokens/refresh-tokens.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/barbers', barbersRouter);
routes.use('/refresh-tokens', refreshTokensRouter);

export default routes;
