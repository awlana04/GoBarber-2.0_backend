import { Request, Response } from 'express';

import UpdateAppointmentService from '../../../services/UpdateAppointmentService';

export default class UpdateAppointmentController {
  constructor(private updateAppointment: UpdateAppointmentService) {}

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { date, barberId } = request.body;
    const { id } = request.params;

    try {
      const appointment = await this.updateAppointment.handle({
        id,
        date,
        barberId,
      });

      return response.json(appointment);
    } catch (error) {
      return response.json(error);
    }
  }
}
