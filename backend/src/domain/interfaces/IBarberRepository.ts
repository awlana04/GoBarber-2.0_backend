import Barber from '../entities/barber';
import User from '../entities/user';

import IUpdateBarberDTO from '../dtos/IUpdateBarberDTO';

export default interface IBarberRepository {
  findById(id: string): Promise<Barber | null>;
  findByName(name: string): Promise<Barber | null>;
  findUserId(userId: string): Promise<User | null>;
  update(id: string, data: IUpdateBarberDTO): Promise<Barber>;
}
