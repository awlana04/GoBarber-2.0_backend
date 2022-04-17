import { Request, Response } from 'express';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';

import prisma from '../../database/prisma';

import AppError from '../../utils/AppError';

export class AuthenticateController {
  public async authenticate(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user) {
        throw new AppError('User does not exists');
      }

      const isValidPassword = compare(password, user.password);

      if (!isValidPassword) {
        throw new AppError('Password does not match');
      }

      const token = jwt.sign({ id: user.id }, process.env.SECRET as string, {
        expiresIn: '7d',
      });

      delete user.password;

      return response.json({ user, token });
    } catch (error) {
      return response.json(error);
    }
  }
}
