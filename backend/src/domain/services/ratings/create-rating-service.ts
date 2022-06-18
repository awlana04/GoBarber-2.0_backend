import IRatingRepository from '@interfaces/i-rating-repository';
import IRatingUsecase from '@usecases/models/i-ratings-usecase';

import { Either, left, right } from '@shared/either';

import InvalidCommentError from '@errors/invalid-comment-error';

import Rating from '@entities/rating';

interface ICreateRatingServiceRequest {
  stars: number;
  comment: string;
  userId: string;
  barberId: string;
}

export default class CreateRatingService {
  constructor(
    private ratingRepository: IRatingRepository,
    private ratingUsecase: IRatingUsecase
  ) {}

  public async hamdle({
    stars,
    comment,
    userId,
    barberId,
  }: ICreateRatingServiceRequest): Promise<
    Either<InvalidCommentError, Rating>
  > {
    await this.ratingUsecase.checkUserExists(userId);
    await this.ratingUsecase.checkBarberExists(barberId);

    const ratingOrError: Either<InvalidCommentError, Rating> = Rating.create({
      stars,
      comment,
      userId,
      barberId,
    });

    if (ratingOrError.isLeft()) {
      return left(ratingOrError.value);
    }

    const rating: Rating = ratingOrError.value as Rating;

    await this.ratingRepository.save({ stars, comment, userId, barberId });

    return right(rating);
  }
}
