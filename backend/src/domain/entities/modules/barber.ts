import Entity from '../shared/entity';

import { BarberProps, BarberValidationProps } from '../interfaces/IBarber';

import Name from '../domain/name';

import { Either, left, right } from '../../shared/either';

import InvalidNameError from '../errors/invalid-name-error';

export default class Barber extends Entity<
  BarberProps | BarberValidationProps
> {
  public readonly name: Name;

  private constructor(
    props: BarberValidationProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(props, id, createdAt, updatedAt);

    this.name = props.name;
  }

  get userId() {
    return this.props.userId;
  }

  public static create(
    props: BarberProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ): Either<InvalidNameError, Barber> {
    const nameOrError = Name.create(props.name);

    if (nameOrError.isLeft()) {
      return left(nameOrError.value);
    }

    const name: Name = nameOrError.value as Name;
    const location = props.location;
    const description = props.description;
    const images = props.images;
    const openAtNight = props.openAtNight;
    const openOnWeekends = props.openOnWeekends;
    const userId = props.userId;
    const appointmentId = props.appointmentId;

    return right(
      new Barber(
        {
          name,
          location,
          description,
          images,
          openAtNight,
          openOnWeekends,
          userId,
          appointmentId,
        },
        id,
        createdAt,
        updatedAt
      )
    );
  }
}
