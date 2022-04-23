import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { createRefreshToken } from '../../../exports/Controllers';

const refreshTokenRouter = Router();

refreshTokenRouter.post(
  '/',
  celebrate({ [Segments.BODY]: { refresh_token: Joi.string().required() } }),
  createRefreshToken.execute
);

export { refreshTokenRouter };
