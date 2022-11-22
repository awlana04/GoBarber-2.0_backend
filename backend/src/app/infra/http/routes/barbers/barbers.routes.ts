import { Router } from 'express';

import ViewBarberProfileController from '@controllers/barbers/view-barber-profile-controller';
import CreateBarberController from '@controllers/barbers/create-barber-controller';

import ensureAuthenticated from '../../middlewares/ensure-authenticated';

const barbersRouter = Router();

const viewBarberProfileController = new ViewBarberProfileController();
const createBarberController = new CreateBarberController();

barbersRouter.get(
  '/:id',
  ensureAuthenticated,
  viewBarberProfileController.execute
);
barbersRouter.post('/:id', ensureAuthenticated, createBarberController.execute);

export default barbersRouter;
