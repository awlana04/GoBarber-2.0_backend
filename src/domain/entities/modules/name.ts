import { Either, left, right } from '../../shared/either';

import InvalidNameError from '../../shared/errors/invalid-name-error';

export default class Name {
  public readonly value: string;

  constructor(name: string) {
    this.value = name;
  }

  get name() {
    return this.value;
  }

  public static validate(name: string): boolean {
    if (!name) {
      return false;
    }

    if (name.trim().length < 3 || name.trim().length > 128) {
      return false;
    }

    return true;
  }

  public static create(name: string): Either<InvalidNameError, Name> {
    if (!Name.validate(name)) {
      return left(new InvalidNameError(name));
    }

    return right(new Name(name));
  }
}
