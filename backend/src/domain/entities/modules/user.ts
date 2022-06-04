import Entity from '../shared/entity';

import {
  UserProps,
  UserValidationProps,
  UpdateUserProps,
} from '../interfaces/user-props';

import Name from '../domain/name';
import Email from '../domain/email';
import Password from '../domain/password';
import Prop from '../domain/prop';

import { Either, left, right } from '@shared/utils/either';

import InvalidNameError from '@shared/errors/invalid-name-error';
import InvalidEmailError from '@shared/errors/invalid-email-error';
import InvalidPasswordError from '@shared/errors/invalid-password-error';
import InvalidPropError from '@shared/errors/invalid-prop-error';

export default class User extends Entity<UserProps | UserValidationProps> {
  public name: Name;
  public password: Password;
  public location: Prop;

  public readonly email: Email;

  private constructor(
    props: UserValidationProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(props, id, createdAt, updatedAt);

    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
    this.location = props.location;
  }

  public static create(
    props: UserProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ): Either<
    | InvalidNameError
    | InvalidEmailError
    | InvalidPasswordError
    | InvalidPropError,
    User
  > {
    const nameOrError = Name.create(props.name);

    if (nameOrError.isLeft()) {
      return left(nameOrError.value);
    }

    const emailOrError = Email.create(props.email);

    if (emailOrError.isLeft()) {
      return left(emailOrError.value);
    }

    const passwordOrError = Password.create(props.password);

    if (passwordOrError.isLeft()) {
      return left(passwordOrError.value);
    }

    const locationOrError = Prop.create(props.location);

    if (locationOrError.isLeft()) {
      return left(locationOrError.value);
    }

    const name: Name = nameOrError.value as Name;
    const email: Email = emailOrError.value as Email;
    const password: Password = passwordOrError.value as Password;
    const location: Prop = locationOrError.value as Prop;
    const avatar = props.avatar;

    return right(
      new User(
        { name, email, password, location, avatar },
        id,
        createdAt,
        updatedAt
      )
    );
  }

  public static update(
    props: UpdateUserProps
  ): Either<InvalidNameError | InvalidPasswordError | InvalidPropError, User> {
    if (props.name) {
      const nameOrError = Name.create(props.name);

      if (nameOrError.isLeft()) {
        return left(nameOrError.value);
      }

      const name: Name = nameOrError.value as Name;

      User.prototype.name = name;
    }

    if (props.password) {
      const passwordOrError = Password.create(props.password);

      if (passwordOrError.isLeft()) {
        return left(passwordOrError.value);
      }

      const password: Password = passwordOrError.value as Password;

      User.prototype.password = password;
    }

    if (props.location) {
      const locationOrError = Prop.create(props.location);

      if (locationOrError.isLeft()) {
        return left(locationOrError.value);
      }

      const location: Prop = locationOrError.value as Prop;

      User.prototype.location = location;
    }

    return right(User.prototype);
  }
}
