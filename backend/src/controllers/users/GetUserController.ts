import { Request, Response } from 'express';

import prisma from '../../database/prisma';

import AppError from '../../utils/AppError';

export class GetUserController {
  public async execute(request: Request, response: Response) {
    try {
      const { id } = request.params;

      const user = await prisma.user.findUnique({
        where: {
          id,
        },
      });

      if (!user) {
        throw new AppError('User does not exists');
      }

      return response.json(user);
    } catch (error) {
      return response.json(error);
    }
  }
}
