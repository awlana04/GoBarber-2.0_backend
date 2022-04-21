import { Router } from 'express';

import { usersRouter } from '../../../../modules/users/infra/http/routes/user.routes';
// import usersRouter from './users.routes';
// import refreshTokenRouter from './refreshToken.routes';
// import barberRouter from './barbers.routes';
// import appointmentsRouter from './appointments.routes';

const router = Router();

router.use('/users', usersRouter);
// router.use(refreshTokenRouter);
// router.use(barberRouter);
// router.use(appointmentsRouter);

export { router };
