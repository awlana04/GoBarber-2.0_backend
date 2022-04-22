import { Request, Response } from 'express';

import BarberRepository from '../../prisma/repositories/BarberRepository';
import UpdateBarberAvatarSerice from '../../../services/UpdateBarberAvatarService';

export default class UpdateBarberAvatarController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const avatar = request.file.filename;

    const barberRepository = new BarberRepository();
    const updateAvatar = new UpdateBarberAvatarSerice(barberRepository);

    try {
      const barber = await updateAvatar.handle({ id, avatar });

      return response.json(barber);
    } catch (error) {
      return response.json(error);
    }
  }
}
