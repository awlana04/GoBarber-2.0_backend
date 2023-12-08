import { Router } from 'express';
import multer from 'multer';

import UpdateUserController from '@controllers/users/update-user-controller';
import UpdateUserAvatarController from '@controllers/users/update-user-avatar-controller';

import uploadConfig from '@core/config/upload';

export const profileRouter = Router();

const upload = multer(uploadConfig.multer);

const updateUserController = new UpdateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();

profileRouter.put('/:id', updateUserController.execute);
profileRouter.patch(
  '/avatar/:id',
  upload.single('avatar'),
  updateUserAvatarController.execute
);
