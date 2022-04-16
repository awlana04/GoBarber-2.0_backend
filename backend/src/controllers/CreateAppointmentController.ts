import { Request, Response } from 'express';

import prisma from '../database/prisma';
import AppError from '../utils/AppError';

export class CreateAppointmentController {
  public async execute(request: Request, response: Response) {
    try {
      const { time, date, userId, barberId } = request.body;
      // const { id } = request.params;

      // const checkIfUserExists = await prisma.user.findFirst({
      //   where: {
      //     id,
      //   },
      // });

      // if (!checkIfUserExists) {
      //   throw new AppError('User does not exists');
      // }

      // const checkIfBarberExists = await prisma.barber.findFirst({
      //   where: {
      //     id: barberId,
      //   },
      // });

      // if (!checkIfBarberExists) {
      //   throw new AppError('Barber does not exists');
      // }

      const appointment = await prisma.appointment.create({
        data: {
          time,
          date,
          userId,
          barberId,
        },
      });

      return response.json(appointment);
    } catch (error) {
      return response.json(error);
    }
  }
}
