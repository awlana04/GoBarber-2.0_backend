import { Request, Response } from 'express';

import DeleteBarberService from '../../../services/DeleteBarberService';

export default class DeleteBarberController {
  constructor(private deleteBarber: DeleteBarberService) {}

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    try {
      const barber = await this.deleteBarber.handle(id);

      return response.json(barber);
    } catch (error) {
      return response.json(error);
    }
  }
}
