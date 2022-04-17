import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import { CreateBarberController } from '../controllers/barbers/CreateBarberController';
import { GetBarberController } from '../controllers/barbers/GetBarberController';
import { GetAllBarbersController } from '../controllers/barbers/GetAllBarbersController';

const barberRouter = Router();

const createBarber = new CreateBarberController();
const getBarber = new GetBarberController();
const getAllBarbers = new GetAllBarbersController();

barberRouter.get('/barbers', getAllBarbers.execute);
barberRouter.get('/barbers/:id', getBarber.execute);

barberRouter.post(
  '/barber/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      location: Joi.string().required(),
      description: Joi.string().max(256).required(),
      images: Joi.string().required(),
      openAtNight: Joi.boolean(),
      openOnWeekends: Joi.boolean(),
    },
  }),
  createBarber.execute
);

export default barberRouter;
