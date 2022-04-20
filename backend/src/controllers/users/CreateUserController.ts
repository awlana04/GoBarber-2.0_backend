import { Request, Response } from 'express';
import { hash } from 'bcryptjs';
import jwt from 'jsonwebtoken';

import prisma from '../../database/prisma';

import AppError from '../../utils/AppError';

export class CreateUserController {
  public async execute(request: Request, response: Response) {
    try {
      const { name, email, password, location } = request.body;

      const checkUserExists = await prisma.user.findFirst({
        where: {
          email,
        },
      });

      if (checkUserExists) {
        response.status(406);
        throw new AppError('Email address aready in use', 406);
      }

      const hashedPassword = await hash(password, 10);

      const avatar = request.file;

      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          location,
          avatar: avatar.filename,
        },
      });

      const token = jwt.sign({ id: user.id }, process.env.SECRET, {
        expiresIn: '15m',
      });

      delete user.password;

      return response.status(201).json({ user, token });
    } catch (error) {
      return response.json(error);
    }
  }
}
