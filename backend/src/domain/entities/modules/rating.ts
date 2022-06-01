import Entity from '../shared/entity';

import { RatingProps, RatingValidationProps } from '../interfaces/rating-props';

import { Either, left, right } from '@shared/utils/either';

import InvalidCommentError from '@shared/errors/invalid-comment-error';

import Comment from '../domain/comment';

export default class Rating extends Entity<
  RatingProps | RatingValidationProps
> {
  public readonly comment: Comment;

  private constructor(
    props: RatingValidationProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(props, id, createdAt, updatedAt);

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

    const rating = props.rating;
    const comment: Comment = commentOrError.value as Comment;
    const barberId = props.barberId;
    const userId = props.userId;

    return right(
      new Rating(
        { rating, comment, barberId, userId },
        id,
        createdAt,
        updatedAt
      )
    );
  }
}
