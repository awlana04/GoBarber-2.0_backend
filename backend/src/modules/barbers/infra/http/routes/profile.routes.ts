import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import multer from 'multer';

import {
  updateBarber,
  updateBarberPassword,
  updateBarberAvatar,
} from '../../../exports/Controllers';

import UploadConfig from '../../../../../config/upload';

const profileRouter = Router();
const upload = multer(UploadConfig.multer);

profileRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: { id: Joi.string().required() },
    [Segments.BODY]: {
      name: Joi.string(),
      location: Joi.string(),
      description: Joi.string(),
      images: Joi.string(),
      openAtNight: Joi.boolean(),
      openOnWeekends: Joi.boolean(),
    },
  }),
  updateBarber.execute
);

profileRouter.put(
  '/password/:id',
  celebrate({
    [Segments.PARAMS]: { id: Joi.string().required() },
    [Segments.BODY]: {
      password: Joi.string().required(),
    },
  }),
  updateBarberPassword.execute
);

profileRouter.patch(
  '/avatar/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
  upload.single('avatar'),
  updateBarberAvatar.execute
);

export { profileRouter };
