import { Request, Response } from 'express';

import AppointmentRepository from '../../prisma/repositories/AppointmentRepository';
import GetAllAppointmentsService from '../../../services/GetAllAppointmentsService';

export default class GetAllAppointmentsController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { id } = request.params;

    const appointmentRepository = new AppointmentRepository();
    const getAllAppointments = new GetAllAppointmentsService(
      appointmentRepository
    );

    try {
      const appointment = await getAllAppointments.handle(id);

      return response.json(appointment);
    } catch (error) {
      return response.json(error);
    }
  }
}
