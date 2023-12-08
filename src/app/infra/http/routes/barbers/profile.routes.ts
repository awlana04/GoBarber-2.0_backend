import { Router } from 'express';
import multer from 'multer';

import ViewBarberProfileController from '@controllers/barbers/view-barber-profile-controller';
import UpdateBarberController from '@controllers/barbers/update-barber-controller';
import UpdateBarberUserPasswordController from '@controllers/barbers/update-barber-user-password-controller';
import UpdateBarberUserAvatarController from '@controllers/barbers/update-barber-user-avatar-controller';

import uploadConfig from '@core/config/upload';

export const profileRouter = Router();

const upload = multer(uploadConfig.multer); 

const viewBarberProfileController = new ViewBarberProfileController();
const updateBarberController = new UpdateBarberController();
const updateBarberUserPasswordController =
  new UpdateBarberUserPasswordController();
const updateBarberUserAvatarController = new UpdateBarberUserAvatarController();

profileRouter.get('/:id', viewBarberProfileController.execute);
profileRouter.put('/:id', updateBarberController.execute);
profileRouter.put('/password/:id', updateBarberUserPasswordController.execute);
profileRouter.patch('/avatar/:id', upload.single('avatar'), updateBarberUserAvatarController.execute);
