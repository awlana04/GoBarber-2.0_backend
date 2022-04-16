import { Request, Response } from 'express';

import prisma from '../../database/prisma';

import AppError from '../../utils/AppError';

export class CreateAppointmentController {
  public async execute(request: Request, response: Response) {
    try {
      const { time, date, barberId } = request.body;
      const { id } = request.params;

      const checkIfUserExists = await prisma.user.findFirst({
        where: {
          id,
        },
      });

      if (!checkIfUserExists) {
        throw new AppError('User does not exists');
      }

      const checkIfBarberExists = await prisma.barber.findFirst({
        where: {
          id: barberId,
        },
      });

      if (!checkIfBarberExists) {
        throw new AppError('Barber does not exists');
      }

      const checkIfAppointmentAlreadyExistsForTheSameBarber =
        await prisma.user.findFirst({
          where: {
            appointment: {
              some: {
                barberId,
              },
            },
          },
        });

      if (checkIfAppointmentAlreadyExistsForTheSameBarber) {
        throw new AppError(
          'You can not have two appointments booked with the same barber'
        );
      }

      const appointment = await prisma.appointment.create({
        data: {
          time,
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
