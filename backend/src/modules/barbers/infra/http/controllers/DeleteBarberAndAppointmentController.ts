import { Request, Response } from 'express';

import BarberRepository from '../../prisma/repositories/BarberRepository';
import DeleteBarberAndAppointmentService from '../../../services/DeleteBarberAndAppointmentService';

export default class DeleteBarberAndAppointmentController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const barberRepository = new BarberRepository();
    const deleteBarberAndAppointment = new DeleteBarberAndAppointmentService(
      barberRepository
    );

    try {
      const barber = await deleteBarberAndAppointment.handle(id);

      return response.json(barber);
    } catch (error) {
      return response.json(error);
    }
  }
}
