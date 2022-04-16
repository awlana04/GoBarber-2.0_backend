import { Request, Response } from 'express';

import prisma from '../../database/prisma';

export class GetBarberController {
  public async view(request: Request, response: Response) {
    const { id } = request.params;

    const barber = await prisma.barber.findUnique({
      where: {
        id,
      },
      include: {
        user: {
          select: {
            name: true,
            avatar: true,
          },
        },
      },
    });

    return response.json(barber);
  }
}
