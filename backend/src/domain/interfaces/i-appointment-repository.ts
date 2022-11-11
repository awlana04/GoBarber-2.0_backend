import IAppointment from '@core/interfaces/i-appointment';
import IUser from '@core/interfaces/i-user';
import IBarber from '@core/interfaces/i-barber';

import ICreateAppointmentDTO from '@dtos/i-create-appointment-dto';

export default interface IAppointmentRepository {
  findById(id: string): Promise<IAppointment | null>;
  findByDate(date: Date, barberId: string): Promise<IAppointment | null>;
  findUserId(userId: string): Promise<IUser | null>;
  findBarberId(barberId: string): Promise<IBarber | null>;
  findAllAppointments(barberId: string): Promise<IBarber | IAppointment[]>;
  save(data: ICreateAppointmentDTO): Promise<IAppointment>;
  update(id: string, date: Date): Promise<IAppointment>;
  delete(id: string): Promise<IAppointment>;
}
