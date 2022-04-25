import Appointment from '../entities/appointment';
import User from '../entities/user';
import Barber from '../entities/barber';

export default interface IAppointmentRepository {
  findByDate(date: Date, barberId: string): Promise<Appointment | null>;
  findUserId(userId: string): Promise<User | null>;
  findBarberId(barberId: string): Promise<Barber | null>;
}
