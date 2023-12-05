import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import IBookedInAPastDateAdapter from '../models/i-booked-in-a-past-date-adapter';

import AppError from '@shared/app-error';

export default class BookedInAPastDateAdapter
  implements IBookedInAPastDateAdapter
{
  public async checkDate(date: Date): Promise<any> {
    dayjs.extend(utc);
    dayjs.extend(isSameOrBefore);

    const today = dayjs().utc().format() as unknown as Date;
    const parsedDate = dayjs(date).isSameOrBefore(today, 'hours');

    if (today > date && parsedDate) {
      throw new AppError('You can not book an appointment in a past date', 406);
    }

    return;
  }
}
