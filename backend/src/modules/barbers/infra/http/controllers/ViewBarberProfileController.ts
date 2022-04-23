import { Request, Response } from 'express';

import ViewBarberProfileService from '../../../services/ViewBarberProfileService';

export default class ViewBarberProfileController {
  constructor(private viewBarberProfile: ViewBarberProfileService) {}

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    try {
      const barber = await this.viewBarberProfile.handle(id);

      return response.json(barber);
    } catch (error) {
      return response.json(error);
    }
  }
}
