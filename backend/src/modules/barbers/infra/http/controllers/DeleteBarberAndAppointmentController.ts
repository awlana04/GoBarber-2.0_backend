import { Request, Response } from 'express';

import DeleteBarberAndAppointmentService from '../../../services/DeleteBarberAndAppointmentService';

export default class DeleteBarberAndAppointmentController {
  constructor(
    private deleteBarberAndAppointment: DeleteBarberAndAppointmentService
  ) {}

  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    try {
      const barber = await this.deleteBarberAndAppointment.handle(id);

      return response.json(barber);
    } catch (error) {
      return response.json(error);
    }
  }
}
