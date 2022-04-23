import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import multer from 'multer';

import {
  viewBarberProfile,
  getAllBarbers,
  createBarber,
  deleteBarber,
  deleteBarberAndAppointment,
} from '../../../exports/Controllers';

import { profileRouter } from './profile.routes';

import ensureAuthenticated from '../../../../../shared/infra/http/middlewares/ensureAuthenticated';
import uploadConfig from '../../../../../config/upload';

const barberRouter = Router();
const upload = multer(uploadConfig.multer);

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

barberRouter.delete(
  '/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
  ensureAuthenticated,
  deleteBarber.execute
);

barberRouter.delete(
  '/users/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
  ensureAuthenticated,
  deleteBarberAndAppointment.execute
);

export { barberRouter };
