import User from '@entities/user';
import Barber from '@entities/barber';

export default interface IBarbersUsecase {
  checkUserExists(userId: string): Promise<User | null>;
  checkBarberNameAlreadyExists(name: string): Promise<Barber | null>;
  checkBarberDoesNotExists(id: string): Promise<Barber | null>;
}
