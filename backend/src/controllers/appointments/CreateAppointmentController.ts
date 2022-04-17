import { Request, Response } from 'express';
import { startOfDay } from 'date-fns';

import prisma from '../../database/prisma';

import AppError from '../../utils/AppError';

export class CreateAppointmentController {
  public async execute(request: Request, response: Response) {
    try {
      const { date, barberId } = request.body;
      const { id } = request.params;

      const user = await prisma.user.findFirst({
        where: {
          id,
        },
      });

      if (!user) {
        throw new AppError('User does not exists');
      }

      const barber = await prisma.barber.findFirst({
        where: {
          id: barberId,
        },
      });

      if (!barber) {
        throw new AppError('Barber does not exists');
      }

      const checkIfAppointmentIsBookedInAPastDate = startOfDay(Date.now());

      if (checkIfAppointmentIsBookedInAPastDate > date) {
        throw new AppError('You can not book an appointment in a past date');
      }

      const bookedDate = await prisma.appointment.findFirst({
        where: {
          date,
          barberId,
        },
      });

      if (bookedDate) {
        throw new AppError('This date is already booked');
      }

      const appointment = await prisma.appointment.create({
        data: {
          date,
          userId: id,
          barberId,
        },
      });

      return response.json(appointment);
    } catch (error) {
      return response.json(error);
    }
  }
}
