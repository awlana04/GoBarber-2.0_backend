import { Router } from 'express';

import usersRouter from './users.routes';
import barberRouter from './barbers.routes';
import appointmentsRouter from './appointments.routes';

const router = Router();

router.use(usersRouter);
router.use(barberRouter);
router.use(appointmentsRouter);

export { router };
