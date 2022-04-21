import { Request, Response } from 'express';

import BarberRepository from '../../prisma/repositories/BarberRepository';
import CreateBarberService from '../../../services/CreateBarberService';

export default class CreateBarberController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { name, location, description, images, openAtNight, openOnWeekends } =
      request.body;
    const { id } = request.params;

    const barberRepository = new BarberRepository();
    const createBarber = new CreateBarberService(barberRepository);

    try {
      const barber = await createBarber.handle({
        name,
        location,
        description,
        images,
        openAtNight,
        openOnWeekends,
        userId: id,
      });

      return response.status(201).json(barber);
    } catch (error) {
      return response.json(error);
    }
  }
}
