import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import multer from 'multer';

import UpdateBarberController from '../controllers/UpdateBarberController';
import UpdateBarberPasswordController from '../controllers/UpdateBarberPasswordController';
import UpdateBarberAvatarController from '../controllers/UpdateBarberAvatarController';

import UploadConfig from '../../../../../config/upload';

const profileRouter = Router();
const upload = multer(UploadConfig);

const updateBarber = new UpdateBarberController();
const updatePassword = new UpdateBarberPasswordController();
const updateAvatar = new UpdateBarberAvatarController();

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
  updatePassword.execute
);

profileRouter.patch(
  '/avatar/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
  updateAvatar.execute
);

export { profileRouter };
