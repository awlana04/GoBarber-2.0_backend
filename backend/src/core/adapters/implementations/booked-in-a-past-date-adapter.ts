import { startOfHour } from 'date-fns';

import IBookedInAPastDateAdapter from '../models/i-booked-in-a-past-date-adapter';

import AppError from '@shared/app-error';

export default class BookedInAPastDateAdapter
  implements IBookedInAPastDateAdapter
{
  public async checkDate(date: Date): Promise<any> {
    const bookedInAPastDate = startOfHour(Date.now());

    if (bookedInAPastDate > date) {
      throw new AppError('You can not book an appointment in a past date', 406);
    }

    return;
  }
}
