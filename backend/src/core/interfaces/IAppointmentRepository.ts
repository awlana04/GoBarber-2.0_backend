import Appointment from '../../domain/entities/appointment';
import User from '../../domain/entities/user';
import Barber from '../../domain/entities/barber';

export default interface IAppointmentRepository {
  findByDate(date: Date, barberId: string): Promise<Appointment | null>;
  findUserId(userId: string): Promise<User | null>;
  findBarberId(barberId: string): Promise<Barber | null>;
}
