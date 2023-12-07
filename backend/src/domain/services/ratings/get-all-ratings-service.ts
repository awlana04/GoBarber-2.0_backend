import IRatingRepository from '@interfaces/i-rating-repository';
import IRatingUsecase from '@usecases/models/i-ratings-usecase';

import IRating from '@core/interfaces/i-rating';

import Rating from '@entities/rating';

export default class GetAllRatingsService {
  constructor(
    private ratingRepository: IRatingRepository,
    private ratingUsecase: IRatingUsecase,
  ) {}

  public async handle(barberId: string): Promise<IRating[] | null> {
    await this.ratingUsecase.checkBarberExists(barberId);

    const rating = await this.ratingRepository.getAllRatings(barberId);

    return rating;
  }
}
