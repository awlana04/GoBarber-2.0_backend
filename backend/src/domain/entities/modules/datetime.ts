import { Either, left, right } from '@shared/either';

import InvalidDateError from '@errors/invalid-datetime-error';

export default class Datetime {
  public readonly value: Date;

  constructor(datetime: Date) {
    this.value = datetime;
  }

  get datetime() {
    return this.value;
  }

  public static validate(datetime: Date): boolean {
    if (!datetime) {
      return false;
    }

    const today = new Date();

    if (datetime < today) {
      return false;
    }

    return true;
  }

  public static create(datetime: Date): Either<InvalidDateError, Datetime> {
    if (!Datetime.validate(datetime)) {
      return left(new InvalidDateError(datetime));
    }

    return right(new Datetime(datetime));
  }
}
