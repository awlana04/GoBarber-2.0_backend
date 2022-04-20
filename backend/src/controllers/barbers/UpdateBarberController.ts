import { Request, Response } from 'express';
import { hash } from 'bcryptjs';

import prisma from '../../database/prisma';

import AppError from '../../utils/AppError';

export class UpdateBarberController {
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

      const barberNameExists = await prisma.barber.findUnique({
        where: {
          name,
        },
      });

      if (barberNameExists === name) {
        response.status(406);
        throw new AppError('Barber name already in use', 406);
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
        },
        include: {
          user: true,
        },
      });

      if (!barber) {
        response.status(404);
        throw new AppError('Barber does not exists', 404);
      }

      return response.json(barber);
    } catch (error) {
      return response.json(error);
    }
  }
}
