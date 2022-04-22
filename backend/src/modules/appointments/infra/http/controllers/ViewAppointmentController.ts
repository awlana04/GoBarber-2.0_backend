import { Request, Response } from 'express';

import AppointmentRepository from '../../prisma/repositories/AppointmentRepository';
import ViewAppointmentService from '../../../services/ViewAppointmentService';

export default class ViewAppointmentController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const appointmentRepository = new AppointmentRepository();
    const viewAppointment = new ViewAppointmentService(appointmentRepository);

    try {
      const appointment = await viewAppointment.handle(id);

      return response.json(appointment);
    } catch (error) {
      return response.json(error);
    }
  }
}
