import { Router } from 'express';

import CreateRatingController from '@controllers/ratings/create-rating-controller';
import DeleteRatingController from '@controllers/ratings/delete-rating-controller';
import GetAllRatingsController from '@controllers/ratings/get-all-ratings-controller';
import UpdateRatingController from '@controllers/ratings/update-rating-controller';
import ViewRatingController from '@controllers/ratings/view-rating-controller';
import ViewUserRatingsController from '@controllers/ratings/view-user-ratings-controller';

import ensureAuthenticated from '../../middlewares/ensure-authenticated';

const ratingsRouter = Router();

const createRatingController = new CreateRatingController();
const deleteRatingController = new DeleteRatingController();
const getAllAppointmentsController = new GetAllRatingsController();
const updateRatingController = new UpdateRatingController();
const viewRatingController = new ViewRatingController();
const viewUserRatingsController = new ViewUserRatingsController();

ratingsRouter.get('/:id', ensureAuthenticated, viewRatingController.execute);

ratingsRouter.get(
  '/users/:id',
  ensureAuthenticated,
  viewUserRatingsController.execute,
);

ratingsRouter.get(
  '/all/:id',
  ensureAuthenticated,
  getAllAppointmentsController.execute,
);

ratingsRouter.post('/:id', ensureAuthenticated, createRatingController.execute);

ratingsRouter.put('/:id', ensureAuthenticated, updateRatingController.execute);

ratingsRouter.delete(
  '/:id',
  ensureAuthenticated,
  deleteRatingController.execute,
);

export default ratingsRouter;
