import { Router } from 'express';
import multer from 'multer';

import GetAllBarbersController from '@controllers/barbers/get-all-barbers-controller';
import CreateBarberController from '@controllers/barbers/create-barber-controller';
import DeleteBarberController from '@controllers/barbers/delete-barber-controller';
import UpdateBarberImageController from '@controllers/barbers/update-barber-image-controller';

import { profileRouter } from './profile.routes';

import uploadConfig from '@core/config/upload';

import ensureAuthenticated from '../../middlewares/ensure-authenticated';

const barbersRouter = Router();
const upload = multer(uploadConfig.multer);

const getAllBarbersController = new GetAllBarbersController();
const createBarberController = new CreateBarberController();
const deleteBarberController = new DeleteBarberController();
const updateBarberImageController = new UpdateBarberImageController();

barbersRouter.use('/profile', ensureAuthenticated, profileRouter);

barbersRouter.get(
  '/all/:id',
  ensureAuthenticated,
  getAllBarbersController.execute,
);
barbersRouter.post(
  '/:id',
  upload.array('images'),
  ensureAuthenticated,
  createBarberController.execute,
);
barbersRouter.patch(
  '/:id',
  upload.array('images'),
  ensureAuthenticated,
  updateBarberImageController.execute,
);
barbersRouter.delete(
  '/:id',
  ensureAuthenticated,
  deleteBarberController.execute,
);

export default barbersRouter;
