import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import timezone from 'dayjs/plugin/timezone';

import IBookedInAPastDateAdapter from '../models/i-booked-in-a-past-date-adapter';

import AppError from '@shared/app-error';

export default class BookedInAPastDateAdapter
  implements IBookedInAPastDateAdapter
{
  public async checkDate(date: Date): Promise<any> {
    dayjs.extend(utc);
    dayjs.extend(isSameOrBefore);
    dayjs.extend(timezone);

    const today = dayjs
      .tz(new Date(), 'America/Sao_Paulo')
      .utc(true)
      .format() as unknown as Date;

    const verifyHour = dayjs(date).isSameOrBefore(today, 'hour');

    if (today > date && verifyHour) {
      throw new AppError('You can not book an appointment in a past date', 406);
    }

    return;
  }
}
