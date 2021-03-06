import { getCustomRepository } from 'typeorm';
import { startOfHour } from 'date-fns';

import Appointment from '../models/appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
  provider: String;
  date: Date;
}

class CreateAppointmentService {
  public async execute({ provider, date }: Request): Promise<Appointment> {
    const appointmentRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentInTheSameDate = appointmentRepository.findByDate(
      appointmentDate
    );

    if (!findAppointmentInTheSameDate) {
      throw new Error('This appointment is already booked.')
    }

    const appointment = appointmentRepository.create({
      provider,
      date: appointmentDate
    });

    await appointmentRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
