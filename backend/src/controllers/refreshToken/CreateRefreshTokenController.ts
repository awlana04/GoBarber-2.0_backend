import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import dayjs from 'dayjs';

import prisma from '../../database/prisma';

import AppError from '../../utils/AppError';

export class CreateRefreshTokenController {
  public async execute(request: Request, response: Response) {
    try {
      const { refresh_token } = request.body;

      const refreshToken = await prisma.refreshToken.findFirst({
        where: {
          id: refresh_token,
        },
      });

      if (!refreshToken) {
        throw new AppError('Refresh token invalid');
      }

      const token = jwt.sign({ id: refreshToken.userId }, process.env.SECRET, {
        expiresIn: '15m',
      });

      const expiredRefreshToken = dayjs().isAfter(
        dayjs.unix(refreshToken.expiresIn)
      );

      if (expiredRefreshToken) {
        await prisma.refreshToken.deleteMany({
          where: {
            userId: refreshToken.userId,
          },
        });

        const expiresIn = dayjs().add(30, 'day').unix();

        const newRefreshToken = await prisma.refreshToken.create({
          data: {
            expiresIn,
            userId: refreshToken.userId,
          },
        });

        return response.json({ token, refreshToken: newRefreshToken });
      }

      return response.json(token);
    } catch (error) {
      return response.json(error);
    }
  }
}
