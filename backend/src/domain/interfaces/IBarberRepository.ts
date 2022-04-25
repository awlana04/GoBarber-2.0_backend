import Barber from '../entities/barber';
import User from '../entities/user';

export default interface IBarberRepository {
  findByName(name: string): Promise<Barber | null>;
  findUserId(userId: string): Promise<User | null>;
}
