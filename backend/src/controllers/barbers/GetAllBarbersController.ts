import { Request, Response } from 'express';

import prisma from '../../database/prisma';

export class GetAllBarbersController {
  public async execute(request: Request, response: Response) {
    const barbers = await prisma.barber.findMany({
      select: {
        name: true,
        location: true,
        openAtNight: true,
        openOnWeekends: true,
        user: {
          select: {
            avatar: true,
          },
        },
      },
      take: 10,
    });

    return response.json(barbers);
  }
}
