import { Request, Response } from 'express';
import { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';

import prisma from '../../database/prisma';

import AppError from '../../utils/AppError';

export class CreateUserController {
  public async execute(request: Request, response: Response) {
    try {
      const { name, email, password, avatar, location } = request.body;

      const user = await prisma.user.findFirst({
        where: {
          email,
        },
      });

      if (user) {
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

      const token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: '7d',
      });

      delete user.password;

      return response.json({ users, token });
    } catch (error) {
      return response.json(error);
    }
  }
}
