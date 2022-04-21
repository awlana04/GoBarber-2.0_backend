import { Router } from 'express';

import { usersRouter } from '../../../../modules/users/infra/http/routes/user.routes';
import { refreshTokenRouter } from '../../../../modules/refreshToken/infra/http/routes/refreshToken.routes';
import { barberRouter } from '../../../../modules/barbers/infra/http/routes/barber.routes';
import { appointmentRouter } from '../../../../modules/appointments/infra/http/routes/appointment.routes';

const router = Router();

router.use('/users', usersRouter);
router.use('/refresh-token', refreshTokenRouter);
router.use('/barbers', barberRouter);
router.use('/appointments', appointmentRouter);

export { router };
