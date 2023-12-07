import IRatingRepository from '@domain/dtos/interfaces/i-rating-repository';

import User from '@entities/user';
import Barber from '@entities/barber';
import Rating from '@entities/rating';

import ICreateRatingDTO from '@domain/dtos/i-create-rating-dto';
import iUpdateRatingDto from '@domain/dtos/i-update-rating-dto';

export default class InMemoryRatingRepository implements IRatingRepository {
  public user: User[] = [];
  public barber: Barber[] = [];
  public rating: Rating[] = [];

  public async findById(id: string): Promise<Rating | null | any> {
    const rating = this.rating.find(rating => rating.id === id);

    if (!rating) {
      return null;
    }

    return rating;
  }

  public async findUserId(userId: string): Promise<User | null | any> {
    const user = this.user.find(user => user.id === userId);

    if (!user) {
      return null;
    }

    return user;
  }

  public async findBarberId(barberId: string): Promise<Barber | null | any> {
    const barber = this.barber.find(barber => barber.id === barberId);

    if (!barber) {
      return null;
    }

    return barber;
  }

  public async findUserRatings(userId: string): Promise<Rating[] | null | any> {
    const rating = this.rating.find(rating => rating.props.userId === userId);

    if (!rating) {
      return null;
    }

    return rating;
  }

  public async getAllRatings(barberId: string): Promise<Rating[] | null | any> {
    return this.rating;
  }

  public async save(data: ICreateRatingDTO): Promise<Rating | any> {
    return this.rating.push(data as unknown as Rating);
  }

  public async update(
    id: string,
    data: iUpdateRatingDto,
  ): Promise<Rating | any> {
    const rating = this.rating.find(rating => rating.id === id);

    if (data.comment) {
      return rating?.comment.value.replace(rating.comment.value, data.comment);
    }

    const comment = String(rating?.comment.value);
    const userId = String(rating?.props.userId);
    const barberId = String(rating?.props.barberId);

    if (data.stars) {
      this.rating.pop();

      return Rating.create({ stars: data.stars, comment, userId, barberId })
        .value as Rating;
    }

    return rating;
  }

  public async delete(id: string): Promise<Rating | any> {
    const rating = this.rating.find(rating => rating.id === id);

    this.rating.pop();

    return rating;
  }
}
