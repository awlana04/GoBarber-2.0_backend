import IAppointmentRepository from '@interfaces/i-appointment-repository';
import IAppointmentUsecase from '@usecases/models/i-appointments-usecase';

import Appointment from '@entities/appointment';

interface ICreateAppointmentServiceRequest {
  date: Date;
  userId: string;
  barberId: string;
}

export default class CreateAppointmentService {
  constructor(
    private readonly appointmentRepository: IAppointmentRepository,
    private readonly appointmentsUsecase: IAppointmentUsecase
  ) {}

  public async handle({
    date,
    userId,
    barberId,
  }: ICreateAppointmentServiceRequest): Promise<Appointment> {
    await this.appointmentsUsecase.checkUserExists(userId);
    await this.appointmentsUsecase.checkBarberExists(barberId);
    await this.appointmentsUsecase.checkIsValidDate(date, barberId);

    const appointment = Appointment.create({ date, userId, barberId });

    await this.appointmentRepository.save({ date, userId, barberId });

    return appointment;
  }
}
