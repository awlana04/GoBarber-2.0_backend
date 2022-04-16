import { Request, Response } from 'express';
import { hash } from 'bcryptjs';

import prisma from '../database/prisma';

import AppError from '../utils/AppError';

export class CreateUserController {
  public async handle(request: Request, response: Response) {
    try {
      const { name, email, password, avatar, location } = request.body;

      const checkUserExists = await prisma.user.findFirst({
        where: {
          email,
        },
      });

      if (checkUserExists) {
        throw new AppError('Email address aready in use');
      }

      const hashedPassword = await hash(password, 10);

      const users = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          avatar,
          location,
        },
      });

      return response.json(users);
    } catch (error) {
      return response.json(error);
    }
  }
}
