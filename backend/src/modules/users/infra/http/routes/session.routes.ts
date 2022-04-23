import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { authenticate } from '../../../exports/Controllers';

const sessionRouter = Router();

sessionRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().required(),
      password: Joi.string().min(8).required(),
    },
  }),
  authenticate.execute
);

export { sessionRouter };
