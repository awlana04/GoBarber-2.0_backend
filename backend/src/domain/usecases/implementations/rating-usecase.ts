import IRatingUsecase from '../models/i-ratings-usecase';

import IRatingRepository from '@interfaces/i-rating-repository';

import User from '@entities/user';
import Barber from '@entities/barber';
import Rating from '@entities/rating';

export default class RatingUsecase implements IRatingUsecase {
  constructor(private ratingRepository: IRatingRepository) {}

  public async checkUserExists(userId: string): Promise<User | null> {
    const user = await this.ratingRepository.findUserId(userId);

    if (!user) {
      throw new Error('User does not exists');
    }

    return null;
  }

  public async checkBarberExists(barberId: string): Promise<Barber | null> {
    const barber = await this.ratingRepository.findBarberId(barberId);

    if (!barber) {
      throw new Error('Barber does not exists');
    }

    return null;
  }

  public async checkRatingExists(id: string): Promise<Rating | null> {
    const rating = await this.ratingRepository.findById(id);

    if (!rating) {
      throw new Error('Rating does not exists');
    }

    return null;
  }
}
