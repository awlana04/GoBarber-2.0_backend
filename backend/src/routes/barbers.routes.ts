import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import CreateBarberService from '../services/CreateBarberService';

const barbersRouter = Router();

barbersRouter.use(ensureAuthenticated);

barbersRouter.post('/', async (request, response) => {
  const { user_id, name, location, description, images, open_on_weekends } = request.body;

  const createBarber = new CreateBarberService();

  const barber = await createBarber.execute({
    user_id,
    name,
    location,
    description,
    open_on_weekends
  })

  return response.json(barber);
})

export default barbersRouter;
