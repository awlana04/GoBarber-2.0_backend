import { Request, Response } from 'express';

import ViewAppointmentService from '../../../services/ViewAppointmentService';

export default class ViewAppointmentController {
  constructor(private viewAppointment: ViewAppointmentService) {}

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    try {
      const appointment = await this.viewAppointment.handle(id);

      return response.json(appointment);
    } catch (error) {
      return response.json(error);
    }
  }
}
