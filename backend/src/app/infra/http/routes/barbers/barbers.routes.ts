import { Router } from 'express';

import GetAllBarbersController from '@controllers/barbers/get-all-barbers-controller';
import CreateBarberController from '@controllers/barbers/create-barber-controller';
import DeleteBarberController from '@controllers/barbers/delete-barber-controller';

import { profileRouter } from './profile.routes';

import ensureAuthenticated from '../../middlewares/ensure-authenticated';

const barbersRouter = Router();

const getAllBarbersController = new GetAllBarbersController();
const createBarberController = new CreateBarberController();
const deleteBarberController = new DeleteBarberController();

barbersRouter.use('/profile', ensureAuthenticated, profileRouter);

barbersRouter.get(
  '/all/:id',
  ensureAuthenticated,
  getAllBarbersController.execute
);
barbersRouter.post('/:id', ensureAuthenticated, createBarberController.execute);
barbersRouter.delete(
  '/:id',
  ensureAuthenticated,
  deleteBarberController.execute
);

export default barbersRouter;
