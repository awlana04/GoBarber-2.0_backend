import Entity from './domain/entity';

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

export default class User extends Entity<UserProps> {
  private constructor(
    props: UserProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(props, id, createdAt, updatedAt);
  }

  get email() {
    return this.props.email;
  }

  static create(
    props: UserProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    const user = new User(props, id, createdAt, updatedAt);

    return user;
  }
}
