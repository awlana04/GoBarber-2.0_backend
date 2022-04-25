import Appointment from '../entities/appointment';

import IAppointmentRepository from '../interfaces/IAppointmentRepository';

interface CreateAppointmentServiceRequest {
  date: Date;
  userId: string;
  barberId: string;
}

export default class CreateAppointmentService {
  constructor(private readonly appointmentRepository: IAppointmentRepository) {}

  public async handle({
    date,
    userId,
    barberId,
  }: CreateAppointmentServiceRequest) {
    const checkUserExists = await this.appointmentRepository.findUserId(userId);

    if (!checkUserExists) {
      throw new Error('User does not exists');
    }

    const checkBarberExists = await this.appointmentRepository.findBarberId(
      barberId
    );

    if (!checkBarberExists) {
      throw new Error('Barber does not exists');
    }

    const checkDateAlreadyExists = await this.appointmentRepository.findByDate(
      date,
      barberId
    );

    if (checkDateAlreadyExists) {
      throw new Error('This date is already booked');
    }

    const appointment = Appointment.create({ date, userId, barberId });

    return appointment;
  }
}
