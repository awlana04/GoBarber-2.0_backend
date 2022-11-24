import { Router } from 'express';

import ViewBarberProfileController from '@controllers/barbers/view-barber-profile-controller';
import UpdateBarberController from '@controllers/barbers/update-barber-controller';
import UpdateBarberUserPasswordController from '@controllers/barbers/update-barber-user-password-controller';
import UpdateBarberUserAvatarController from '@controllers/barbers/update-barber-user-avatar-controller';

export const profileRouter = Router();

const viewBarberProfileController = new ViewBarberProfileController();
const updateBarberController = new UpdateBarberController();
const updateBarberUserPasswordController =
  new UpdateBarberUserPasswordController();
const updateBarberUserAvatarController = new UpdateBarberUserAvatarController();

profileRouter.get('/:id', viewBarberProfileController.execute);
profileRouter.put('/:id', updateBarberController.execute);
profileRouter.put('/password/:id', updateBarberUserPasswordController.execute);
profileRouter.patch('/avatar/:id', updateBarberUserAvatarController.execute);
