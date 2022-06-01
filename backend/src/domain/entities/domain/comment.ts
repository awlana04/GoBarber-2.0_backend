import { Either, left, right } from '@shared/utils/either';

import InvalidCommentError from '@shared/errors/invalid-comment-error';

export default class Comment {
  public readonly value: string;

  constructor(comment: string) {
    this.value = comment;
  }

  private static validate(comment: string): boolean {
    if (!comment) {
      return false;
    }

    if (comment.length < 64 || comment.length > 512) {
      return false;
    }

    return true;
  }

  public static create(comment: string): Either<InvalidCommentError, Comment> {
    if (!Comment.validate(comment)) {
      return left(new InvalidCommentError(comment));
    }

    return right(new Comment(comment));
  }
}
