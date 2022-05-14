import Entity from '../shared/entity';

import { NotificationProps } from '../interfaces/notifications-props';

export default class Notification extends Entity<NotificationProps> {
  private constructor(
    props: NotificationProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(props, id, createdAt, updatedAt);
  }

  public static create(
    props: NotificationProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    const notification = new Notification(props, id, createdAt, updatedAt);

    return notification;
  }
}
