import User from '@entities/user';
import Barber from '@entities/barber';
import Rating from '@entities/rating';

export default interface IRatingUsecase {
  checkUserExists(userId: string): Promise<User | null>;
  checkBarberExists(barberId: string): Promise<Barber | null>;
  checkRatingExists(id: string): Promise<Rating | null>;
}
