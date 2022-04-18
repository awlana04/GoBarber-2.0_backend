import { Request, Response } from 'express';
import { hash } from 'bcryptjs';

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

      if (barberNameExists === name) {
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
          user: true,
        },
      });
      if (password) {
        const hashedPassword = await hash(barber.user.password, 10);

        await prisma.barber.update({
          where: {
            id,
          },
          data: {
            user: {
              update: {
                password: hashedPassword,
              },
            },
          },
        });

        delete barber.user.password;
      }
      if (!barber) {
        throw new AppError('Barber does not exists');
      }

      return response.json(barber);
    } catch (error) {
      return response.json(error);
    }
  }
}
