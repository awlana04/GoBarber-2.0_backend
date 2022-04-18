import { Request, Response } from 'express';

import prisma from '../../database/prisma';

import AppError from '../../utils/AppError';

export class DeleteAppointmentController {
  public async execute(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const appointment = await prisma.appointment.delete({
        where: {
          id,
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
