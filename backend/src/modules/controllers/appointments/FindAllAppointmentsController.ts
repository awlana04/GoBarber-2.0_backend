import { Request, Response } from 'express';

import prisma from '../../database/prisma';

export class FindAllAppointmentsController {
  public async execute(request: Request, response: Response) {
    const { id } = request.params;

    const appointments = await prisma.appointment.findMany({
      where: {
        barberId: id,
      },
      include: {
        user: true,
      },
    });

    return response.json(appointments);
  }
}
