import RatingRepository from '@repositories/rating-repository';
import RatingUsecase from '@usecases/implementations/rating-usecase';

import ViewRatingService from '@services/ratings/view-rating-service';
import ViewUserRatingsService from '@services/ratings/view-user-ratings-service';
import GetAllRatingsService from '@services/ratings/get-all-ratings-service';
import CreateRatingService from '@services/ratings/create-rating-service';
import UpdateRatingService from '@services/ratings/update-rating-service';
import DeleteRatingService from '@services/ratings/delete-rating-service';

const CreateRatingFactory = () => {
  const ratingRepository = new RatingRepository();
  const ratingUsecase = new RatingUsecase(ratingRepository);

  const viewRatingService = new ViewRatingService(
    ratingRepository,
    ratingUsecase,
  );

  const viewUserRatingsService = new ViewUserRatingsService(
    ratingRepository,
    ratingUsecase,
  );

  const getAllRatingsService = new GetAllRatingsService(
    ratingRepository,
    ratingUsecase,
  );

  const createRatingService = new CreateRatingService(
    ratingRepository,
    ratingUsecase,
  );

  const updateRatingService = new UpdateRatingService(
    ratingRepository,
    ratingUsecase,
  );

  const deleteRatingService = new DeleteRatingService(
    ratingRepository,
    ratingUsecase,
  );

  return {
    viewRatingService,
    viewUserRatingsService,
    getAllRatingsService,
    createRatingService,
    updateRatingService,
    deleteRatingService,
  };
};

export default CreateRatingFactory;
