import Barber from '../entities/modules/barber';
import User from '../entities/modules/user';
import Appointment from '@entities/appointment';

import IUpdateBarberDTO from '../dtos/IUpdateBarberDTO';

export default interface IBarberRepository {
  findById(id: string): Promise<Barber | null>;
  findByName(name: string): Promise<Barber | null>;
  findUserId(userId: string): Promise<User | null>;
  getAllBarbers(): Promise<Barber[]>;
  save(barber: Barber): Promise<Barber>;
  update(id: string, data: IUpdateBarberDTO): Promise<Barber>;
  updatePassword(
    id: string,
    userId: string,
    password: string
  ): Promise<Barber & User>;
  updateAvatar(
    id: string,
    userId: string,
    avatar: string
  ): Promise<Barber & User>;
  delete(id: string): Promise<Barber>;
  deleteBarberAndAppointments(id: string): Promise<Barber | Appointment>;
}
