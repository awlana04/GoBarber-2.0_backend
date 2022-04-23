import { Request, Response } from 'express';

import UpdateBarberAvatarSerice from '../../../services/UpdateBarberAvatarService';

export default class UpdateBarberAvatarController {
  constructor(private updateBarberAvatar: UpdateBarberAvatarSerice) {}

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const avatar = request.file.filename;

    try {
      const barber = await this.updateBarberAvatar.handle({ id, avatar });

      return response.json(barber);
    } catch (error) {
      return response.json(error);
    }
  }
}
