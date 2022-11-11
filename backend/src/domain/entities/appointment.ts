import Entity from './shared/entity';

import {
  AppointmentProps,
  AppointmentValidationProps,
  UpdateAppointmentProps,
} from './interfaces/appointment-props';

import Prop from './modules/prop';

import { Either, left, right } from '@shared/either';

import InvalidPropError from '@errors/invalid-prop-error';

export default class Appointment extends Entity<
  AppointmentProps | AppointmentValidationProps
> {
  public date: Date;
  public userId: Prop;
  public barberId: Prop;

  private constructor(
    props: AppointmentValidationProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(props, id, createdAt, updatedAt);

    this.date = props.date;
    this.userId = props.userId;
    this.barberId = props.barberId;
  }

  // get date() {
  //   return this.props.date;
  // }

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

  public static update(
    props: UpdateAppointmentProps
  ): Either<InvalidPropError, Appointment> {
    const date = props.date;

    Appointment.prototype.date = date;

    return right(Appointment.prototype);
  }
}
