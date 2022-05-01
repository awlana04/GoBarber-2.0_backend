import IAppointmentRepository from '@interfaces/i-appointment-repository';

import Appointment from '@entities/appointment';

interface ICreateAppointmentServiceRequest {
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
  }: ICreateAppointmentServiceRequest): Promise<Appointment> {
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

    if (date < new Date()) {
      throw new Error('You can not book an appointment in a past date');
    }

    const appointment = Appointment.create({ date, userId, barberId });

    return appointment;
  }
}
