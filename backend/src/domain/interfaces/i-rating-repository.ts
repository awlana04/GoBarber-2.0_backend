import Rating from '@entities/rating';
import User from '@entities/user';
import Barber from '@entities/barber';

import ICreateRatingDTO from '@domain/dtos/i-create-rating-dto';
import IUpdateRatingDTO from '@domain/dtos/i-update-rating-dto';

export default interface IRatingRepository {
  findById(id: string): Promise<Rating | null>;
  findUserId(userId: string): Promise<User | null>;
  findBarberId(barberId: string): Promise<Barber | null>;
  save(data: ICreateRatingDTO): Promise<Rating>;
  update(id: string, data: IUpdateRatingDTO): Promise<Rating>;
  delete(id: string): Promise<Rating>;
}
