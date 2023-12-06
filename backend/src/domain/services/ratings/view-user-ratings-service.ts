import IRatingRepository from '@interfaces/i-rating-repository';
import IRatingUsecase from '@usecases/models/i-ratings-usecase';

import Rating from '@entities/rating';

export default class ViewUserRatingsService {
  constructor(
    private ratingRepository: IRatingRepository,
    private ratingUsecase: IRatingUsecase,
  ) {}

  public async handle(userId: string): Promise<Rating[] | null> {
    await this.ratingUsecase.checkUserExists(userId);

    const rating = await this.ratingRepository.findUserRatings(userId);

    return rating;
  }
}
