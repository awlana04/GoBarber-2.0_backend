import { Request, Response } from 'express';

import prisma from '../../database/prisma';

import AppError from '../../utils/AppError';

export class DeleteBarberUserAndAppointmentController {
  public async execute(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const barber = await prisma.barber.findUnique({
        where: {
          id,
        },
        include: {
          appointment: true,
          user: true,
        },
      });

      if (barber?.appointment) {
        await prisma.appointment.deleteMany({
          where: {
            barberId: id,
          },
        });
      }

      if (barber?.user) {
        await prisma.barber.delete({
          where: {
            id,
          },
        });

        await prisma.user.delete({
          where: {
            email: barber.user.email,
          },
        });
      }

      if (!barber) {
        throw new AppError('Barber does not exists');
      }

      return response.json(barber);
    } catch (error) {
      return response.json(error);
    }
  }
}
