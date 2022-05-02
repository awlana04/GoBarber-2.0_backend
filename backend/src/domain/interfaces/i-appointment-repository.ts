import Appointment from '../entities/modules/appointment';
import User from '../entities/modules/user';
import Barber from '../entities/modules/barber';

export default interface IAppointmentRepository {
  findById(id: string): Promise<Appointment | null>;
  findByDate(date: Date, barberId: string): Promise<Appointment | null>;
  findUserId(userId: string): Promise<User | null>;
  findBarberId(barberId: string): Promise<Barber | null>;
  update(id: string, date: Date): Promise<Appointment>;
  delete(id: string): Promise<Appointment>;
}
