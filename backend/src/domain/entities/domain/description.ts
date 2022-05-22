import { Either, left, right } from '@shared/utils/either';

import InvalidDescriptionError from '@shared/errors/invalid-description-error';

export default class Description {
  public readonly value: string;

  constructor(description: string) {
    this.value = description;
  }

  private static validate(description: string): boolean {
    if (!description) {
      return false;
    }

    if (description.length < 32 || description.length > 256) {
      return false;
    }

    return true;
  }

  public static create(
    description: string
  ): Either<InvalidDescriptionError, Description> {
    if (!Description.validate(description)) {
      return left(new InvalidDescriptionError(description));
    }

    return right(new Description(description));
  }
}
