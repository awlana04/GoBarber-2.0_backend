import { Appointment, User, Barber } from '@prisma/client';

import ICreateAppointmentDTO from '../dtos/ICreateAppointmentDTO';

export default interface IAppointmentRepository {
  findAppointmentById(id: string): Promise<Appointment | undefined>;
  findAppointmentByUser(id: string): Promise<User | undefined>;
  findAppointmentByBarber(id: string): Promise<Barber | undefined>;
  findAppointmentByDate(
    date: Date,
    barberId: string
  ): Promise<Appointment | undefined>;
  findAllAppointments(barberId: string): Promise<Appointment[]>;
  create(data: ICreateAppointmentDTO): Promise<Appointment>;
  update(id: string, date: Date, barberId: string): Promise<Appointment>;
}
