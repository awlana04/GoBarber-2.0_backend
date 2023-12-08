import IRatingRepository from '@interfaces/i-rating-repository';
import IRatingUsecase from '@usecases/models/i-ratings-usecase';

import { Either, left, right } from '@shared/either';

import InvalidCommentError from '@errors/invalid-comment-error';

import Rating from '@entities/rating';

interface UpdateRatingServiceRequest {
  id: string;
  stars?: number;
  comment?: string;
}

export default class UpdateRatingService {
  constructor(
    private ratingRepository: IRatingRepository,
    private ratingUsecase: IRatingUsecase,
  ) {}

  public async handle({
    id,
    stars,
    comment,
  }: UpdateRatingServiceRequest): Promise<Either<InvalidCommentError, Rating>> {
    await this.ratingUsecase.checkRatingExists(id);

    const ratingOrError: Either<InvalidCommentError, Rating> = Rating.update({
      stars,
      comment,
    });

    if (ratingOrError.isLeft()) {
      return left(ratingOrError.value);
    }

    const rating: Rating = ratingOrError.value as Rating;

    await this.ratingRepository.update(id, { stars, comment });

    return right(rating);
  }
}
