import Entity from '../shared/entity';

import {
  RatingProps,
  RatingValidationProps,
  UpdateRatingProps,
} from '../interfaces/rating-props';

import { Either, left, right } from '@shared/utils/either';

import InvalidCommentError from '@shared/errors/invalid-comment-error';

import Comment from '../domain/comment';

export default class Rating extends Entity<
  RatingProps | RatingValidationProps
> {
  public stars: number;
  public comment: Comment;

  private constructor(
    props: RatingValidationProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(props, id, createdAt, updatedAt);

    this.stars = props.stars;
    this.comment = props.comment;
  }

  public static create(
    props: RatingProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ): Either<InvalidCommentError, Rating> {
    const commentOrError = Comment.create(props.comment);

    if (commentOrError.isLeft()) {
      return left(commentOrError.value);
    }

    const stars = props.stars;
    const comment: Comment = commentOrError.value as Comment;
    const barberId = props.barberId;
    const userId = props.userId;

    return right(
      new Rating({ stars, comment, barberId, userId }, id, createdAt, updatedAt)
    );
  }

  public static update(
    props: UpdateRatingProps
  ): Either<InvalidCommentError, Rating> {
    if (props.stars) {
      const stars = props.stars;

      Rating.prototype.stars = stars;
    }

    const commentOrError = Comment.create(props.comment);

    if (commentOrError.isLeft()) {
      return left(commentOrError.value);
    }

    const comment: Comment = commentOrError.value as Comment;

    Rating.prototype.comment = comment;

    return right(Rating.prototype);
  }
}
