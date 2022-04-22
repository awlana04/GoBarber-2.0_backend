import { Request, Response } from 'express';

import BarberRepository from '../../prisma/repositories/BarberRepository';
import UpdateBarberService from '../../../services/UpdateBarberService';

export default class UpdateBarberController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { name, location, description, images, openAtNight, openOnWeekends } =
      request.body;
    const { id } = request.params;

    const barberRepository = new BarberRepository();
    const updateBarber = new UpdateBarberService(barberRepository);

    try {
      const barber = await updateBarber.handle({
        id,
        name,
        location,
        description,
        images,
        openAtNight,
        openOnWeekends,
      });

      return response.json(barber);
    } catch (error) {
      return response.json(error);
    }
  }
}
