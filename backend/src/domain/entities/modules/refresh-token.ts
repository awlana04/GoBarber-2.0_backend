import Entity from '../shared/entity';

import { RefreshTokenProps } from '../interfaces/refresh-token-props';

export default class RefreshToken extends Entity<RefreshTokenProps> {
  constructor(
    props: RefreshTokenProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    super(props, id, createdAt, updatedAt);
  }

  public static create(
    props: RefreshTokenProps,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date
  ) {
    const refreshToken = new RefreshToken(props, id, createdAt, updatedAt);

    return refreshToken;
  }
}
