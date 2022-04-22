import { Request, Response } from 'express';

import AppointmentRepository from '../../prisma/repositories/AppointmentRepository';
import AppointmentProvider from '../../../providers/implemetantions/AppointmentProvider';
import CreateAppointmentService from '../../../services/CreateAppointmentService';

export default class CreateAppointmentController {
  public async execute(
    request: Request,
    response: Response
  ): Promise<Response> {
    const { date, barberId } = request.body;
    const { id } = request.params;

    const appointmentRepository = new AppointmentRepository();
    const appointmentProvider = new AppointmentProvider(appointmentRepository);
    const createAppointment = new CreateAppointmentService(
      appointmentRepository,
      appointmentProvider
    );

    try {
      const appointment = await createAppointment.handle({
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
