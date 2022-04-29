import Entity from '../shared/entity';

import Name from '../domain/name';
import Email from '../domain/email';
import Password from '../domain/password';

import { Either, left, right } from '../../shared/either';

import InvalidNameError from '../errors/invalid-name-error';
import InvalidEmailError from '../errors/invalid-email-error';
import InvalidPasswordError from '../errors/invalid-password-error';

type UserProps = {
  name: string;
  email: string;
  password: string;
  location: string;
  avatar?: string;
  refreshTokenId?: string;
  barberId?: string;
  appointmentId?: string[];
};

export default class User extends Entity<UserProps | any> {
  public readonly name: Name;
  public readonly email: Email;
  public readonly password: Password;

  private constructor(
    props: {
      name: Name;
      email: Email;
      password: Password;
      location: string;
      avatar?: string;
      refreshTokenId?: string;
      barberId?: string;
      appointmentId?: string[];
    },
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(props, id, createdAt, updatedAt);

    this.name = props.name;
    this.email = props.email;
    this.password = props.password;
  }

  // get email() {
  //   return this.props.email;
  // }

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

  // static create(
  //   props: UserProps,
  //   id?: string,
  //   createdAt?: Date,
  //   updatedAt?: Date
  // ) {
  //   const user = new User(props, id, createdAt, updatedAt);

  //   return user;
  // }
}
