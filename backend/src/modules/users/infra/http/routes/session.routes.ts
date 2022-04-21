import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import AuthenticateController from '../controllers/AuthenticateController';

const sessionRouter = Router();

const createAuthentication = new AuthenticateController();

sessionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().min(8).required(),
    },
  }),
  createAuthentication.execute
);

export { sessionRouter };
