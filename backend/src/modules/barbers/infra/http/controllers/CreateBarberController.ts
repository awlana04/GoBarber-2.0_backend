import { Request, Response } from 'express';

import CreateBarberService from '../../../services/CreateBarberService';

export default class CreateBarberController {
  constructor(private createBarber: CreateBarberService) {}

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { name, location, description, images, openAtNight, openOnWeekends } =
      request.body;
    const { id } = request.params;

    try {
      const barber = await this.createBarber.handle({
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
