import { Request, Response } from 'express';
import { startOfDay } from 'date-fns';

import prisma from '../../database/prisma';

import AppError from '../../utils/AppError';

export class CreateAppointmentController {
  public async execute(request: Request, response: Response) {
    try {
      const { date, barberId } = request.body;
      const { id } = request.params;

      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!user) {
        response.status(404);
        throw new AppError('User does not exists', 404);
      }

      const barber = await prisma.barber.findFirst({
        where: {
          id: barberId,
        },
      });

      if (!barber) {
        response.status(404);
        throw new AppError('Barber does not exists', 404);
      }

      const checkIfAppointmentIsBookedInAPastDate = startOfDay(Date.now());

      if (checkIfAppointmentIsBookedInAPastDate > date) {
        response.status(406);
        throw new AppError(
          'You can not book an appointment in a past date',
          406
        );
      }

      const bookedDate = await prisma.appointment.findFirst({
        where: {
          date,
          barberId,
        },
      });

      if (bookedDate) {
        response.status(406);
        throw new AppError('This date is already booked', 406);
      }

      const appointment = await prisma.appointment.create({
        data: {
          date,
          userId: id,
          barberId,
        },
      });

      return response.status(201).json(appointment);
    } catch (error) {
      return response.json(error);
    }
  }
}
