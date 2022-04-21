import { Router } from 'express';

import { usersRouter } from '../../../../modules/users/infra/http/routes/user.routes';
import { refreshTokenRouter } from '../../../../modules/refreshToken/infra/http/routes/refreshToken.routes';

const router = Router();

router.use('/users', usersRouter);
router.use('/refresh-token', refreshTokenRouter);

export { router };
