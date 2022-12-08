import IRatingRepository from '@interfaces/i-rating-repository';
import IRatingUsecase from '@usecases/models/i-ratings-usecase';

import Rating from '@entities/rating';

export default class GetAllRatings {
  constructor(
    private ratingRepository: IRatingRepository,
    private ratingUsecase: IRatingUsecase
  ) {}

  public async handle(barberId: string): Promise<Rating[] | null> {
    await this.ratingUsecase.checkBarberExists(barberId);

    const rating = await this.ratingRepository.getAllRatings(barberId);

    return rating;
  }
}
