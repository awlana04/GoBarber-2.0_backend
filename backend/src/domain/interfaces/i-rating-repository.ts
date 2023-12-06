import IRating from '@core/interfaces/i-rating';
import IUser from '@core/interfaces/i-user';
import IBarber from '@core/interfaces/i-barber';

import ICreateRatingDTO from '@dtos/i-create-rating-dto';
import IUpdateRatingDTO from '@dtos/i-update-rating-dto';

export default interface IRatingRepository {
  findById(id: string): Promise<IRating | null>;
  findUserId(userId: string): Promise<IUser | null>;
  findBarberId(barberId: string): Promise<IBarber | null>;
  findUserRatings(userId: string): Promise<IRating[] | null>;
  getAllRatings(barberId: string): Promise<IRating[] | null>;
  save(data: ICreateRatingDTO): Promise<IRating>;
  update(id: string, data: IUpdateRatingDTO): Promise<IRating>;
  delete(id: string): Promise<IRating>;
}
