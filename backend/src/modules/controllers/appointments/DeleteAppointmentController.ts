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
        response.status(404);
        throw new AppError('Appointment does not exists', 404);
      }

      return response.json(appointment);
    } catch (error) {
      return response.json(error);
    }
  }
}
