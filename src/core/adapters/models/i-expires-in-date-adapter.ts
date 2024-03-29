import { ManipulateType } from 'dayjs';

export default interface IExpiresInDateAdapter {
  expiresIn(time: number, unit: ManipulateType): Promise<number>;
  checkExpiredRefreshToken(timeToExpire: number): Promise<boolean>;
}
