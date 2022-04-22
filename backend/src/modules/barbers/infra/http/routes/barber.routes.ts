import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ViewBarberProfileController from '../controllers/ViewBarberProfileController';
import GetAllBarbersController from '../controllers/GetAllBarbersController';
import CreateBarberController from '../controllers/CreateBarberController';

import { profileRouter } from './profile.routes';

import ensureAuthenticated from '../../../../../shared/infra/http/middlewares/ensureAuthenticated';

const barberRouter = Router();

const viewBarberProfile = new ViewBarberProfileController();
const getAllBarbers = new GetAllBarbersController();
const createBarber = new CreateBarberController();

barberRouter.use('/profile', ensureAuthenticated, profileRouter);

barberRouter.get(
  '/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
  ensureAuthenticated,
  viewBarberProfile.execute
);

barberRouter.get(
  '/user/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
  ensureAuthenticated,
  getAllBarbers.execute
);

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
