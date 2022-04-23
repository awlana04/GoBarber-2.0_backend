import { Request, Response } from 'express';

import GetAllAppointmentsService from '../../../services/GetAllAppointmentsService';

export default class GetAllAppointmentsController {
  constructor(private getAllAppointments: GetAllAppointmentsService) {}

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    try {
      const appointment = await this.getAllAppointments.handle(id);

      return response.json(appointment);
    } catch (error) {
      return response.json(error);
    }
  }
}
