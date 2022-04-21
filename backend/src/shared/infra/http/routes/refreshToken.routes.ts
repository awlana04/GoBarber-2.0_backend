import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { CreateRefreshTokenController } from '../controllers/refreshToken/CreateRefreshTokenController';

const refreshTokenRouter = Router();

const createRefreshToken = new CreateRefreshTokenController();

refreshTokenRouter.post(
  '/refresh-token',
  celebrate({
    [Segments.BODY]: {
      refresh_token: Joi.string().required(),
    },
  }),
  createRefreshToken.execute
);

export default refreshTokenRouter;
