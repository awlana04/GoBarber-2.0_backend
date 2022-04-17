import { Request, Response } from 'express';
import { startOfHour } from 'date-fns';

import prisma from '../../database/prisma';

import AppError from '../../utils/AppError';

export class UpdateAppointmentController {
  public async execute(request: Request, response: Response) {
    try {
      const { date, userId, barberId } = request.body;
      const { id } = request.params;

      const checkIfAppointmentISBookedInAPastDate = startOfHour(Date.now());

      if (checkIfAppointmentISBookedInAPastDate > date) {
        throw new AppError('You can not book an appointment in a past date');
      }

      const bookedData = await prisma.appointment.findFirst({
        where: {
          date,
          barberId,
        },
      });

      if (bookedData) {
        throw new AppError('This date is already booked');
      }

      const appointment = await prisma.appointment.update({
        where: {
          id,
        },
        data: {
          date,
        },
      });

      if (!appointment) {
        throw new AppError('Appointment does not exists');
      }

      return response.json(appointment);
    } catch (error) {
      return response.json(error);
    }
  }
}
