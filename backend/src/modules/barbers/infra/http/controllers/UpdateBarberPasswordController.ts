import { Request, Response } from 'express';

import UpdateBarberPasswordService from '../../../services/UpdateBarberPasswordService';

export default class UpdateBarberPasswordController {
  constructor(private updateBarberPassword: UpdateBarberPasswordService) {}

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { password } = request.body;
    const { id } = request.params;

    try {
      const barber = await this.updateBarberPassword.handle({ id, password });

      return response.json(barber);
    } catch (error) {
      return response.json(error);
    }
  }
}
