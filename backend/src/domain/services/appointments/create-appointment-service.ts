import IAppointmentRepository from '@interfaces/i-appointment-repository';
import IAppointmentUsecase from '@usecases/models/i-appointments-usecase';

import { Either, left, right } from '@shared/either';

import InvalidDatetimeError from '@errors/invalid-datetime-error';
import InvalidPropError from '@errors/invalid-prop-error';

import IAppointment from '@core/interfaces/i-appointment';

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
    Either<InvalidDatetimeError | InvalidPropError, IAppointment>
  > {
    await this.appointmentsUsecase.checkUserExists(userId);
    await this.appointmentsUsecase.checkBarberExists(barberId);
    await this.appointmentsUsecase.checkIsValidDate(date, barberId);

    const appointmentOrError: Either<
      InvalidDatetimeError | InvalidPropError,
      Appointment
    > = Appointment.create({ date, userId, barberId });

    if (appointmentOrError.isLeft()) {
      return left(appointmentOrError.value);
    }

    const appointment = await this.appointmentRepository.save({
      date,
      userId,
      barberId,
    });

    return right(appointment);
  }
}
