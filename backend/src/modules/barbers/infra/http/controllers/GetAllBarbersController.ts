import { Request, Response } from 'express';

import GetAllBarbersService from '../../../services/GetAllBarbersService';

export default class GetAllBarbersController {
  constructor(private getAllBarbers: GetAllBarbersService) {}

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    try {
      const barbers = await this.getAllBarbers.handle(id);

      return response.json(barbers);
    } catch (error) {
      return response.json(error);
    }
  }
}
