import Entity from '../shared/entity';

import { AppointmentProps } from '../interfaces/appointment-props';

export default class Appointment extends Entity<AppointmentProps> {
  private constructor(
    props: AppointmentProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(props, id, createdAt, updatedAt);
  }

  get date() {
    return this.props.date;
  }

  get userId() {
    return this.props.userId;
  }

  get barberId() {
    return this.props.barberId;
  }

  public static create(
    props: AppointmentProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    const appointment = new Appointment(props, id, createdAt, updatedAt);

    return appointment;
  }
}
