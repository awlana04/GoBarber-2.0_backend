import Entity from '../shared/entity';

import { RatingProps } from '../interfaces/rating-props';

export default class Rating extends Entity<RatingProps> {
  constructor(
    props: RatingProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(props, id, createdAt, updatedAt);
  }

  public static create(
    props: RatingProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    const rating = new Rating(props, id, createdAt, updatedAt);

    return rating;
  }
}
