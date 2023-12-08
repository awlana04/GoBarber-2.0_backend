import InMemoryRatingRepository from '@in-memory/in-memory-rating-repository';
import ViewRatingService from './view-rating-service';
import RatingUsecase from '@usecases/implementations/rating-usecase';

import User from '@entities/user';
import Barber from '@entities/barber';
import Rating from '@entities/rating';

type SutOutput = {
  ratingRepositoy: InMemoryRatingRepository;
  sut: ViewRatingService;
};

const makeSut = (): SutOutput => {
  const ratingRepositoy = new InMemoryRatingRepository();
  const ratingUsecase = new RatingUsecase(ratingRepositoy);
  const sut = new ViewRatingService(ratingRepositoy, ratingUsecase);

  return { ratingRepositoy, sut };
};

describe('View a rating', () => {
  const { ratingRepositoy, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
  }).value as User;

  const barber = Barber.create({
    name: 'John Doe Barber',
    location: 'Somewhere Over the Pocket',
    description: 'This is a really good place, please believe me :)',
    openAtNight: true,
    openOnWeekends: true,
    userId: user.id,
  }).value as Barber;

  const rating = Rating.create({
    stars: 5,
    comment:
      'A very good place, this is my fifth time commming back here. A really peace and profissional barber.',
    userId: user.id,
    barberId: barber.id,
  }).value as Rating;

  ratingRepositoy.user.push(user);
  ratingRepositoy.barber.push(barber);
  ratingRepositoy.rating.push(rating);

  it('should be able to view a rating', async () => {
    const response = await sut.handle(rating.id);

    expect(response).toBeDefined();
  });
});
