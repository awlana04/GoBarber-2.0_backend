import { Request, Response } from 'express';
import { compare } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dayjs from 'dayjs';

import prisma from '../../database/prisma';

import AppError from '../../utils/AppError';

export class AuthenticateController {
  public async authenticate(request: Request, response: Response) {
    try {
      const { email, password } = request.body;

      const user = await prisma.user.findFirst({
        where: {
          email,
        },
      });

      if (!user) {
        response.status(404);
        throw new AppError('Email or password incorrect', 404);
      }

      const isValidPassword = compare(password, user.password);

      if (!isValidPassword) {
        response.status(404);
        throw new AppError('Email or password incorrect', 404);
      }

      const token = jwt.sign({ id: user.id }, process.env.SECRET as string, {
        expiresIn: '15m',
      });

      await prisma.refreshToken.deleteMany({
        where: {
          userId: user.id,
        },
      });

      const expiresIn = dayjs().add(30, 'day').unix();

      const refreshToken = await prisma.refreshToken.create({
        data: {
          expiresIn,
          userId: user.id,
        },
      });

      delete user.password;

      return response.json({ user, token, refreshToken });
    } catch (error) {
      return response.json(error);
    }
  }
}
