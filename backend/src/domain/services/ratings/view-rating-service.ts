import IRatingRepository from '@interfaces/i-rating-repository';
import IRatingUsecase from '@usecases/models/i-ratings-usecase';

import IRating from '@core/interfaces/i-rating';

import Rating from '@entities/rating';

export default class ViewRatingService {
  constructor(
    private ratingRepository: IRatingRepository,
    private ratingUsecase: IRatingUsecase,
  ) {}

  public async handle(id: string): Promise<IRating | null> {
    await this.ratingUsecase.checkRatingExists(id);

    const rating = this.ratingRepository.findById(id);

    return rating;
  }
}
