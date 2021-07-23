import { Router } from 'express';

import appointmentRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';
import barbersRouter from './barbers.routes';

const routes = Router();

routes.use('/appointments', appointmentRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/barbers', barbersRouter);

export default routes;
