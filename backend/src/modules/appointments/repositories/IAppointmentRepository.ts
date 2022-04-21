import { Appointment, Barber, User } from '@prisma/client';

import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';

export default interface IAppointmentRepository {
  findAppointmentByUser(id: string): Promise<User | undefined>;
  findAppointmentByBarber(id: string): Promise<Barber | undefined>;
  findAppointmentByDate(
    date: Date,
    barberId: string
  ): Promise<Appointment | undefined>;
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
}
