import IAppointmentRepository from '@interfaces/i-appointment-repository';
import IAppointmentUsecase from '@usecases/models/i-appointments-usecase';

import { Either, left, right } from '@shared/utils/either';

import InvalidPropError from '@shared/errors/invalid-prop-error';

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
  }: ICreateAppointmentServiceRequest): Promise<
    Either<InvalidPropError, Appointment>
  > {
    await this.appointmentsUsecase.checkUserExists(userId);
    await this.appointmentsUsecase.checkBarberExists(barberId);
    await this.appointmentsUsecase.checkIsValidDate(date, barberId);

    const appointmentOrError = Appointment.create({ date, userId, barberId });

    if (appointmentOrError.isLeft()) {
      return left(appointmentOrError.value);
    }

    const appointment: Appointment = appointmentOrError.value as Appointment;

    await this.appointmentRepository.save({ date, userId, barberId });

    return right(appointment);
  }
}
