import { Request, Response } from 'express';
import { hash } from 'bcryptjs';

import prisma from '../../database/prisma';

import AppError from '../../utils/AppError';

export class UpdateBarberUserController {
  public async execute(request: Request, response: Response) {
    try {
      const { name, password, avatar } = request.body;
      const { id } = request.params;

      const barber = await prisma.barber.update({
        where: {
          id,
        },
        data: {
          user: {
            update: {
              name,
              password,
              avatar,
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
        response.status(404);
        throw new AppError('Barber does not exists', 404);
      }

      return response.json(barber);
    } catch (error) {
      return response.json(error);
    }
  }
}
