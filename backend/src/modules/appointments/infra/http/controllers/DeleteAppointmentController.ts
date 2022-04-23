import { Request, Response } from 'express';

import DeleteAppointmentService from '../../../services/DeleteAppointmentService';

export default class DeleteAppointmentController {
  constructor(private deleteAppointment: DeleteAppointmentService) {}

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    try {
      const appointment = await this.deleteAppointment.handle(id);

      return response.json(appointment);
    } catch (error) {
      return response.json(error);
    }
  }
}
