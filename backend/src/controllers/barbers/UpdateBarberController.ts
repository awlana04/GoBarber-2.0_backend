import { Request, Response } from 'express';

import prisma from '../../database/prisma';

import AppError from '../../utils/AppError';

export class UpdateBarberController {
  public async execute(request: Request, response: Response) {
    try {
      const {
        name,
        userName,
        avatar,
        password,
        location,
        description,
        images,
        openAtNight,
        openOnWeekends,
      } = request.body;
      const { id } = request.params;

      const barberNameExists = await prisma.barber.findFirst({
        where: {
          name,
        },
      });

      if (barberNameExists) {
        throw new AppError('Barber name already in use');
      }

      const barber = await prisma.barber.update({
        where: {
          id,
        },
        data: {
          name,
          location,
          description,
          images,
          openAtNight,
          openOnWeekends,
          user: {
            update: {
              name: userName,
              avatar,
              password,
            },
          },
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
