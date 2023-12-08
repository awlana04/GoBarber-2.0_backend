import IRatingRepository from '@interfaces/i-rating-repository';
import IRatingUsecase from '@usecases/models/i-ratings-usecase';

import Rating from '@entities/rating';

export default class DeleteRatingService {
  constructor(
    private ratingRepository: IRatingRepository,
    private ratingUsecase: IRatingUsecase,
  ) {}

  public async handle(id: string): Promise<Rating> {
    await this.ratingUsecase.checkRatingExists(id);

    const rating = await this.ratingRepository.delete(id);

    return rating;
  }
}
