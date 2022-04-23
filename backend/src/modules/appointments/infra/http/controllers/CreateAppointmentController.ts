import { Request, Response } from 'express';

import CreateAppointmentService from '../../../services/CreateAppointmentService';

export default class CreateAppointmentController {
  constructor(private createAppointment: CreateAppointmentService) {}

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { date, barberId } = request.body;
    const { id } = request.params;

    try {
      const appointment = await this.createAppointment.handle({
        date,
        barberId,
        userId: id,
      });

      return response.status(201).json(appointment);
    } catch (error) {
      return response.json(error);
    }
  }
}
