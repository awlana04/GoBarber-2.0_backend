import IAppointmentRepository from '@interfaces/i-appointment-repository';
import IAppointmentUsecase from '@usecases/models/i-appointments-usecase';

import { Either, left, right } from '@shared/either';

import InvalidDatetimeError from '@errors/invalid-datetime-error';

import Appointment from '@entities/appointment';

interface IUpdateAppointmentServiceRequest {
  id: string;
  date: Date;
}

export default class UpdateAppointmentService {
  constructor(
    private readonly appointmentRepository: IAppointmentRepository,
    private readonly appointmentsUsecase: IAppointmentUsecase
  ) {}

  public async handle({
    id,
    date,
  }: IUpdateAppointmentServiceRequest): Promise<
    Either<InvalidDatetimeError, Appointment>
  > {
    await this.appointmentsUsecase.checkAppointmentExists(id);

    const appointmentOrError: Either<InvalidDatetimeError, Appointment> =
      Appointment.update({ date });

    if (appointmentOrError.isLeft()) {
      return left(appointmentOrError.value);
    }

    const appointment: Appointment = appointmentOrError.value as Appointment;

    await this.appointmentRepository.update(id, date);

    return right(appointment);
  }
}
