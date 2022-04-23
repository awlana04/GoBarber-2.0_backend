import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import multer from 'multer';

import { updateUser, updateAvatar } from '../../../exports/Controllers';

import uplaodConfig from '../../../../../config/upload';

const profileRouter = Router();
const upload = multer(uplaodConfig.multer);

profileRouter.put(
  '/:id',
  celebrate({
    [Segments.PARAMS]: { id: Joi.string().required() },
    [Segments.BODY]: {
      name: Joi.string(),
      password: Joi.string(),
      location: Joi.string(),
    },
  }),
  updateUser.execute
);

profileRouter.patch(
  '/avatar/:id',
  celebrate({ [Segments.PARAMS]: { id: Joi.string().required() } }),
  upload.single('avatar'),
  updateAvatar.execute
);

export { profileRouter };
