import { Request, Response } from 'express';

import UpdateBarberService from '../../../services/UpdateBarberService';

export default class UpdateBarberController {
  constructor(private updateBarber: UpdateBarberService) {}

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { name, location, description, images, openAtNight, openOnWeekends } =
      request.body;
    const { id } = request.params;

    try {
      const barber = await this.updateBarber.handle({
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
