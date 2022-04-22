import { Request, Response } from 'express';

import AppointmentRepository from '../../prisma/repositories/AppointmentRepository';
import AppointmentProvider from '../../../providers/implemetantions/AppointmentProvider';
import UpdateAppointmentService from '../../../services/UpdateAppointmentService';

export default class UpdateAppointmentController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { date, barberId } = request.body;
    const { id } = request.params;

    const appointmentRepository = new AppointmentRepository();
    const appointmentProvider = new AppointmentProvider(appointmentRepository);
    const updateAppointment = new UpdateAppointmentService(
      appointmentRepository,
      appointmentProvider
    );

    try {
      const appointment = await updateAppointment.handle({
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
