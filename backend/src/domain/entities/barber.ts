import Entity from './domain/entity';

type BarberProps = {
  name: string;
  location: string;
  description: string;
  images?: string[];
  openAtNight: boolean;
  openOnWeekends: boolean;
  userId: string;
  appointmentId?: string[];
};

export default class Barber extends Entity<BarberProps> {
  private constructor(
    props: BarberProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(props, id, createdAt, updatedAt);
  }

  get userId() {
    return this.props.userId;
  }

  get name() {
    return this.props.name;
  }

  static create(
    props: BarberProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    const barber = new Barber(props, id, createdAt, updatedAt);

    return barber;
  }
}
