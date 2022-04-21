import { Request, Response } from 'express';
import { startOfHour } from 'date-fns';

import prisma from '../../database/prisma';

import AppError from '../../utils/AppError';

export class UpdateAppointmentController {
  public async execute(request: Request, response: Response) {
    try {
      const { date, barberId } = request.body;
      const { id } = request.params;

      const checkIfAppointmentISBookedInAPastDate = startOfHour(Date.now());

      if (checkIfAppointmentISBookedInAPastDate > date) {
        response.status(406);
        throw new AppError(
          'You can not book an appointment in a past date',
          406
        );
      }

      const bookedData = await prisma.appointment.findFirst({
        where: {
          date,
          barberId,
        },
      });

      if (bookedData) {
        response.status(406);
        throw new AppError('This date is already booked', 406);
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
        response.status(404);
        throw new AppError('Appointment does not exists', 404);
      }

      return response.json(appointment);
    } catch (error) {
      return response.json(error);
    }
  }
}
