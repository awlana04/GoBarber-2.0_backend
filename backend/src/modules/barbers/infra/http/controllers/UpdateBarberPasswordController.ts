import { Request, Response } from 'express';

import BarberRepository from '../../prisma/repositories/BarberRepository';
import BCryptHashProvider from '../../../../users/providers/implemetantions/BCryptHashProvider';
import UpdateBarberPasswordService from '../../../services/UpdateBarberPasswordService';

export default class UpdateBarberPasswordController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { password } = request.body;
    const { id } = request.params;

    const barberRepository = new BarberRepository();
    const hashProvider = new BCryptHashProvider();
    const updatePassword = new UpdateBarberPasswordService(
      barberRepository,
      hashProvider
    );

    try {
      const barber = await updatePassword.handle({ id, password });

      return response.json(barber);
    } catch (error) {
      return response.json(error);
    }
  }
}
