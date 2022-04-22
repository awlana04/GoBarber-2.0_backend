import { Request, Response } from 'express';

import BarberRepository from '../../prisma/repositories/BarberRepository';
import GetAllBarbersService from '../../../services/GetAllBarbersService';

export default class GetAllBarbersController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const barberRepository = new BarberRepository();
    const getAllBarbers = new GetAllBarbersService(barberRepository);

    try {
      const barbers = await getAllBarbers.handle(id);

      return response.json(barbers);
    } catch (error) {
      return response.json(error);
    }
  }
}
