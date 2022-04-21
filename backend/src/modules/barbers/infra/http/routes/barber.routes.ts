import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import CreateBarberController from '../controllers/CreateBarberController';

import ensureAuthenticated from '../../../../../shared/infra/http/middlewares/ensureAuthenticated';

const barberRouter = Router();

const createBarber = new CreateBarberController();

barberRouter.post(
  '/:id',
  celebrate({
    [Segments.PARAMS]: { id: Joi.string().required() },
    [Segments.BODY]: {
      name: Joi.string().required(),
      location: Joi.string().required(),
      description: Joi.string().required(),
      images: Joi.string(),
      openAtNight: Joi.boolean(),
      openOnWeekends: Joi.boolean(),
    },
  }),
  ensureAuthenticated,
  createBarber.execute
);

export { barberRouter };
