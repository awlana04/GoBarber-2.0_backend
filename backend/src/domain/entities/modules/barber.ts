import Entity from '../shared/entity';

import {
  BarberProps,
  BarberValidationProps,
  UpdateBarberProps,
} from '../interfaces/barber-props';

import Name from '../domain/name';
import Description from '../domain/description';
import Prop from '../domain/prop';

import { Either, left, right } from '@shared/utils/either';

import InvalidNameError from '@shared/errors/invalid-name-error';
import InvalidDescriptionError from '@domain/shared/errors/invalid-description-error';
import InvalidPropError from '@domain/shared/errors/invalid-prop-error';

export default class Barber extends Entity<
  BarberProps | BarberValidationProps
> {
  public name: Name;
  public location: Prop;
  public description: Description;
  public openAtNight: boolean;
  public openOnWeekends: boolean;

  private constructor(
    props: BarberValidationProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(props, id, createdAt, updatedAt);

    this.name = props.name;
    this.location = props.location;
    this.description = props.description;
    this.openAtNight = props.openAtNight;
    this.openOnWeekends = props.openOnWeekends;
  }

  get userId() {
    return this.props.userId;
  }

  public static create(
    props: BarberProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ): Either<
    InvalidNameError | InvalidDescriptionError | InvalidPropError,
    Barber
  > {
    const nameOrError = Name.create(props.name);

    if (nameOrError.isLeft()) {
      return left(nameOrError.value);
    }

    const descriptionOrError = Description.create(props.description);

    if (descriptionOrError.isLeft()) {
      return left(descriptionOrError.value);
    }

    const locationOrError = Prop.create(props.location);

    if (locationOrError.isLeft()) {
      return left(locationOrError.value);
    }

    const name: Name = nameOrError.value as Name;
    const location: Prop = locationOrError.value as Prop;
    const description: Description = descriptionOrError.value as Description;
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

  public static update(
    props: UpdateBarberProps
  ): Either<
    InvalidNameError | InvalidDescriptionError | InvalidPropError,
    Barber
  > {
    if (props.name) {
      const nameOrError = Name.create(props.name);

      if (nameOrError.isLeft()) {
        return left(nameOrError.value);
      }

      const name: Name = nameOrError.value as Name;

      Barber.prototype.name = name;
    }

    if (props.location) {
      const locationOrError = Prop.create(props.location);

      if (locationOrError.isLeft()) {
        return left(locationOrError.value);
      }

      const location: Prop = locationOrError.value as Prop;

      Barber.prototype.location = location;
    }

    if (props.description) {
      const descriptionOrError = Description.create(props.description);

      if (descriptionOrError.isLeft()) {
        return left(descriptionOrError.value);
      }

      const description: Description = descriptionOrError.value as Description;

      Barber.prototype.description = description;
    }

    if (props.openAtNight !== undefined) {
      const openAtNight = props.openAtNight;

      Barber.prototype.openAtNight = openAtNight;
    }

    if (props.openOnWeekends !== undefined) {
      const openOnWeekends = props.openOnWeekends;

      Barber.prototype.openOnWeekends = openOnWeekends;
    }

    return right(Barber.prototype);
  }
}
