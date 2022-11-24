import { Router } from 'express';

import ViewBarberProfileController from '@controllers/barbers/view-barber-profile-controller';
import GetAllBarbersController from '@controllers/barbers/get-all-barbers-controller';
import CreateBarberController from '@controllers/barbers/create-barber-controller';
import UpdateBarberController from '@controllers/barbers/update-barber-controller';
import UpdateBarberUserPasswordController from '@controllers/barbers/update-barber-user-password-controller';

import ensureAuthenticated from '../../middlewares/ensure-authenticated';

const barbersRouter = Router();

const viewBarberProfileController = new ViewBarberProfileController();
const getAllBarbersController = new GetAllBarbersController();
const createBarberController = new CreateBarberController();
const updateBarberController = new UpdateBarberController();
const updateBarberUserPasswordController =
  new UpdateBarberUserPasswordController();

barbersRouter.get(
  '/:id',
  ensureAuthenticated,
  viewBarberProfileController.execute
);
barbersRouter.get(
  '/all/:id',
  ensureAuthenticated,
  getAllBarbersController.execute
);
barbersRouter.post('/:id', ensureAuthenticated, createBarberController.execute);
barbersRouter.put('/:id', ensureAuthenticated, updateBarberController.execute);
barbersRouter.put(
  '/users/:id',
  ensureAuthenticated,
  updateBarberUserPasswordController.execute
);

export default barbersRouter;
