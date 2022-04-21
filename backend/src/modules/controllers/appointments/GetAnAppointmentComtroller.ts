import { Request, Response } from 'express';

import prisma from '../../database/prisma';

export class GetAnAppointmentController {
  public async execute(request: Request, response: Response) {
    const { id } = request.params;

    const appointment = await prisma.appointment.findUnique({
      where: {
        id,
      },
      include: {
        user: true,
        barber: true,
      },
    });

    return response.json(appointment);
  }
}
