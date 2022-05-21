import { Either, left, right } from '@shared/utils/either';

import InvalidPropError from '@shared/errors/invalid-prop-error';

export default class Prop {
  public readonly value: string;

  private constructor(prop: string) {
    this.value = prop;
  }

  get prop() {
    return this.value;
  }

  public static validate(prop: string): boolean {
    if (!prop) {
      return false;
    }

    return true;
  }

  public static create(prop: string): Either<InvalidPropError, Prop> {
    if (!Prop.validate(prop)) {
      return left(new InvalidPropError(prop));
    }

    return right(new Prop(prop));
  }
}