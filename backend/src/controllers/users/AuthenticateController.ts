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
        throw new AppError('Email or password incorrect');
      }

      const isValidPassword = compare(password, user.password);

      if (!isValidPassword) {
        throw new AppError('Email or password incorrect');
      }

      const token = jwt.sign({ id: user.id }, process.env.SECRET as string, {
        expiresIn: process.env.ENVIRONMENT === 'development' ? '1d' : '15s',
      });

      await prisma.refreshToken.deleteMany({
        where: {
          userId: user.id,
        },
      });

      const expiresIn =
        process.env.ENVIRONMENT === 'development'
          ? dayjs().add(1, 'day').unix()
          : dayjs().add(15, 'seconds').unix();

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
