import User from '@entities/user';
import Barber from '@entities/barber';
import Appointment from '@entities/appointment';

export default interface IAppointmentUsecase {
  checkUserExists(userId: string): Promise<User | null>;
  checkBarberExists(barberId: string): Promise<Barber | null>;
  checkIsValidDate(date: Date, barberId: string): Promise<Appointment | null>;
  checkAppointmentExists(id: string): Promise<Appointment | null>;
}
