import Entity from '../shared/entity';

import {
  AppointmentProps,
  AppointmentValidationProps,
} from '../interfaces/appointment-props';

import Prop from '../domain/prop';

import { Either, left, right } from '@shared/utils/either';

import InvalidPropError from '@shared/errors/invalid-prop-error';

export default class Appointment extends Entity<
  AppointmentProps | AppointmentValidationProps
> {
  public userId: Prop;
  public barberId: Prop;

  private constructor(
    props: AppointmentValidationProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(props, id, createdAt, updatedAt);

    this.userId = props.userId;
    this.barberId = props.barberId;
  }

  get date() {
    return this.props.date;
  }

  public static create(
    props: AppointmentProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ): Either<InvalidPropError, Appointment> {
    const userIdOrError = Prop.create(props.userId);

    if (userIdOrError.isLeft()) {
      return left(userIdOrError.value);
    }

    const barberIdOrError = Prop.create(props.barberId);

    if (barberIdOrError.isLeft()) {
      return left(barberIdOrError.value);
    }

    const date = props.date;
    const userId: Prop = userIdOrError.value as Prop;
    const barberId: Prop = barberIdOrError.value as Prop;

    return right(
      new Appointment({ date, userId, barberId }, id, createdAt, updatedAt)
    );
  }
}
