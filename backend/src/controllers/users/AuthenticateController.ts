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

      const user = await prisma.user.findUnique({
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
        expiresIn: '30s',
      });

      await prisma.refreshToken.deleteMany({
        where: {
          userId: user.id,
        },
      });

      const expiresIn = dayjs().add(30, 'second').unix();

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
