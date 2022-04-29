import Entity from '../shared/entity';

type AppointmentProps = {
  date: Date;
  userId: string;
  barberId: string;
};

export default class Appointment extends Entity<AppointmentProps> {
  private constructor(
    props: AppointmentProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(props, id, createdAt, updatedAt);
  }

  get userId() {
    return this.props.userId;
  }

  get barberId() {
    return this.props.barberId;
  }

  get date() {
    return this.props.date;
  }

  static create(
    props: AppointmentProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    const appointment = new Appointment(props, id, createdAt, updatedAt);

    return appointment;
  }
}