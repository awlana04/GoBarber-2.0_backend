import { Router } from 'express';

import CreateBarberController from '@core/controllers/barbers/create-barber-controller';

import ensureAuthenticated from '../../middlewares/ensure-authenticated';

const barbersRouter = Router();

const createBarber = new CreateBarberController();

barbersRouter.post('/:id', ensureAuthenticated, createBarber.execute);

export default barbersRouter;
