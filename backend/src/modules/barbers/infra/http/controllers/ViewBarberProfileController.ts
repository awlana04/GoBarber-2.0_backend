import { Request, Response } from 'express';

import BarberRepository from '../../prisma/repositories/BarberRepository';
import ViewBarberProfileService from '../../../services/ViewBarberProfileService';

export default class ViewBarberProfileController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const barberRepository = new BarberRepository();
    const viewBarberProfile = new ViewBarberProfileService(barberRepository);

    try {
      const barber = await viewBarberProfile.handle(id);

      return response.json(barber);
    } catch (error) {
      return response.json(error);
    }
  }
}
