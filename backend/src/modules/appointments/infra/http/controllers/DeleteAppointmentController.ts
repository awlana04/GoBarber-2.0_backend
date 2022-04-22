import { Request, Response } from 'express';

import AppointmentRepository from '../../prisma/repositories/AppointmentRepository';
import DeleteAppointmentService from '../../../services/DeleteAppointmentService';

export default class DeleteAppointmentController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const appointmentRepository = new AppointmentRepository();
    const deleteAppointment = new DeleteAppointmentService(
      appointmentRepository
    );

    try {
      const appointment = await deleteAppointment.handle(id);

      return response.json(appointment);
    } catch (error) {
      return response.json(error);
    }
  }
}
