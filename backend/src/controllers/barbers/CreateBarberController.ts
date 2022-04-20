import { Request, Response } from 'express';

import prisma from '../../database/prisma';

import AppError from '../../utils/AppError';

export class CreateBarberController {
  public async execute(request: Request, response: Response) {
    try {
      const { name, location, description, openAtNight, openOnWeekends } =
        request.body;
      const { id } = request.params;

      const user = await prisma.user.findUnique({
        where: {
          id,
        },
        include: {
          barber: true,
        },
      });

      if (!user) {
        response.status(404);
        throw new AppError('User does not exists', 404);
      }

      if (user.barber) {
        response.status(406);
        throw new AppError('User already have a barber account', 406);
      }

      const barberNameExists = await prisma.barber.findUnique({
        where: {
          name,
        },
      });

      if (barberNameExists) {
        response.status(406);
        throw new AppError('Barber name already in use', 406);
      }

      // const files = request.files as Express.Multer.File[];

      // const images = files.map(image => {
      //   return image.filename;
      // });

      // console.log(images);

      const barber = await prisma.barber.create({
        data: {
          name,
          location,
          description,
          // images,
          openAtNight,
          openOnWeekends,
          userId: id,
        },
      });

      return response.status(201).json(barber);
    } catch (error) {
      return response.json(error);
    }
  }
}
