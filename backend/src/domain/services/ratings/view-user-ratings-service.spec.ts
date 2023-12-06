import InMemoryRatingRepository from '@in-memory/in-memory-rating-repository';
import ViewUserRatingsService from './view-user-ratings-service';
import RatingUsecase from '@usecases/implementations/rating-usecase';

import User from '@entities/user';
import Barber from '@entities/barber';
import Rating from '@entities/rating';

type SutOutput = {
  ratingRepository: InMemoryRatingRepository;
  sut: ViewUserRatingsService;
};

const makeSut = (): SutOutput => {
  const ratingRepository = new InMemoryRatingRepository();
  const ratingUsecase = new RatingUsecase(ratingRepository);
  const sut = new ViewUserRatingsService(ratingRepository, ratingUsecase);

  return { ratingRepository, sut };
};

describe('View user ratings', () => {
  const { ratingRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
  }).value as User;

  const barber = Barber.create({
    name: 'John Doe Barber',
    location: 'Somewhere Into the Pocket',
    description: 'This is a really good place, please believe me :)',
    openAtNight: true,
    openOnWeekends: true,
    userId: user.id,
  }).value as Barber;

  const rating = Rating.create({
    stars: 5,
    comment:
      'A very good place, this is my fifth time comming back here. A really peace and profissioanl barber.',
    userId: user.id,
    barberId: barber.id,
  }).value as Rating;

  ratingRepository.user.push(user);
  ratingRepository.barber.push(barber);
  ratingRepository.rating.push(rating);

  it('should be able to view all the ratings of an user', async () => {
    const response = await sut.handle(user.id);

    expect(response).toBeDefined();
  });
});
