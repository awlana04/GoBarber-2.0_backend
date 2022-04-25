import Barber from '../../domain/entities/barber';
import User from '../../domain/entities/user';

export default interface IBarberRepository {
  findByName(name: string): Promise<Barber | null>;
  findUserId(userId: string): Promise<User | null>;
}
