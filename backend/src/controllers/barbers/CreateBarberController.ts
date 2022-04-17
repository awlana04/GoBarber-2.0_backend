import { Request, Response } from 'express';

import prisma from '../../database/prisma';

import AppError from '../../utils/AppError';

export class CreateBarberController {
  public async execute(request: Request, response: Response) {
    try {
      const {
        name,
        location,
        description,
        images,
        openAtNight,
        openOnWeekends,
      } = request.body;
      const { id } = request.params;

      const user = await prisma.user.findFirst({
        where: {
          id,
        },
      });

      if (!user) {
        throw new AppError('User does not exists');
      }

      const barber = await prisma.barber.create({
        data: {
          name,
          location,
          description,
          images,
          openAtNight,
          openOnWeekends,
          user: {
            connect: {
              id,
            },
          },
        },
      });

      return response.json(barber);
    } catch (error) {
      return response.json(error);
    }
  }
}
