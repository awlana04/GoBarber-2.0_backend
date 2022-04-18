import { Request, Response } from 'express';

import prisma from '../../database/prisma';

import AppError from '../../utils/AppError';

export class GetBarberController {
  public async execute(request: Request, response: Response) {
    try {
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

      if (!barber) {
        throw new AppError('Barber does not exists');
      }

      return response.json(barber);
    } catch (error) {
      return response.json(error);
    }
  }
}
