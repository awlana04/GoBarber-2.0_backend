import Entity from '../shared/entity';

import {
  UserProps,
  UserValidationProps,
  UpdateUserProps,
} from '../interfaces/user-props';

import Name from '../domain/name';
import Email from '../domain/email';
import Password from '../domain/password';

import { Either, left, right } from '@shared/utils/either';

import InvalidNameError from '@shared/errors/invalid-name-error';
import InvalidEmailError from '@shared/errors/invalid-email-error';
import InvalidPasswordError from '@shared/errors/invalid-password-error';

export default class User extends Entity<UserProps | UserValidationProps> {
  public name: Name;
  public readonly email: Email;
  public password: Password;

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
  }

  public static create(
    props: UserProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ): Either<InvalidNameError | InvalidEmailError | InvalidPasswordError, User> {
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

    const name: Name = nameOrError.value as Name;
    const email: Email = emailOrError.value as Email;
    const password: Password = passwordOrError.value as Password;
    const location = props.location;
    const avatar = props.avatar;
    const barberId = props.barberId;

    return right(
      new User(
        { name, email, password, location, avatar, barberId },
        id,
        createdAt,
        updatedAt
      )
    );
  }

  public static update(
    props: UpdateUserProps
  ): Either<InvalidNameError | InvalidPasswordError, User> {
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

    return right(User.prototype);
  }
}
