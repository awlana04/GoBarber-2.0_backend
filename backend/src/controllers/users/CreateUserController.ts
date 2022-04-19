import { Request, Response } from 'express';
import { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';
import multer from 'multer';

import prisma from '../../database/prisma';

import AppError from '../../utils/AppError';

export class CreateUserController {
  public async execute(request: Request, response: Response) {
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

      const image = request.file;

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          avatar: image.filename,
          location,
        },
      });

      const token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: process.env.ENVIRONMENT === 'development' ? '1d' : '15s',
      });

      delete user.password;

      return response.json({ user, token });
    } catch (error) {
      return response.json(error);
    }
  }
}
