import { Request, Response } from 'express';

import BarberRepository from '../../prisma/repositories/BarberRepository';
import DeleteBarberService from '../../../services/DeleteBarberService';

export default class DeleteBarberController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const barberRepository = new BarberRepository();
    const deleteBarber = new DeleteBarberService(barberRepository);

    try {
      const barber = await deleteBarber.handle(id);

      return response.json(barber);
    } catch (error) {
      return response.json(error);
    }
  }
}
