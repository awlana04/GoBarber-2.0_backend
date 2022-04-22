import { Appointment } from '@prisma/client';

export default interface IAppointmentProvider {
  bookedDate(date: Date, barberId: string): Promise<any>;
}
