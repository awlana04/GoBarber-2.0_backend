import { Request, Response } from 'express';
import { hash } from 'bcryptjs';

import prisma from '../../database/prisma';

import AppError from '../../utils/AppError';

export class UpdateUserController {
  public async execute(request: Request, response: Response) {
    try {
      const { name, location, avatar, password } = request.body;
      const { id } = request.params;

      const user = await prisma.user.update({
        where: {
          id,
        },
        data: {
          name,
          location,
          avatar,
          password,
        },
        include: {
          barber: true,
        },
      });

      if (user.barber) {
        throw new AppError('You are a barber. You can not update your profile');
      }

      if (!user) {
        throw new AppError('User does not exists');
      }

      if (password) {
        const hashedPassword = await hash(user.password, 10);

        await prisma.user.update({
          where: {
            id,
          },
          data: {
            password: hashedPassword,
          },
        });

        delete user.password;
      }

      return response.json(user);
    } catch (error) {
      return response.json(error);
    }
  }
}
