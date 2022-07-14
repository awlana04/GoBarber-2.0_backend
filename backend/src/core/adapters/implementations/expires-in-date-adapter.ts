import dayjs, { ManipulateType } from 'dayjs';

import IExpiresInDateAdapter from '../models/i-expires-in-date-adapter';

export default class ExpiresInDateAdapter implements IExpiresInDateAdapter {
  public async expiresIn(time: number, unit: ManipulateType): Promise<number> {
    return dayjs().add(time, unit).unix();
  }

  public async checkExpiredRefreshToken(timeToExpire: number): Promise<any> {
    return dayjs().isAfter(dayjs.unix(timeToExpire));
  }
}
