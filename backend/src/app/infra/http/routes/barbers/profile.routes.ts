import { Router } from 'express';

import ViewBarberProfileController from '@controllers/barbers/view-barber-profile-controller';
import UpdateBarberController from '@controllers/barbers/update-barber-controller';
import UpdateBarberUserPasswordController from '@controllers/barbers/update-barber-user-password-controller';

export const profileRouter = Router();

const viewBarberProfileController = new ViewBarberProfileController();
const updateBarberController = new UpdateBarberController();
const updateBarberUserPasswordController =
  new UpdateBarberUserPasswordController();

profileRouter.get('/:id', viewBarberProfileController.execute);
profileRouter.put('/:id', updateBarberController.execute);
profileRouter.put('/password/:id', updateBarberUserPasswordController.execute);
