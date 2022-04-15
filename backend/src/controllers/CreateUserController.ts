import { Request, Response } from 'express';

import prisma from '../database/prisma';

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, password, avatar, location } = request.body;

    const users = await prisma.user.create({
      data: {
        name,
        email,
        password,
        avatar,
        location,
      },
    });

    return response.json(users);
  }
}
