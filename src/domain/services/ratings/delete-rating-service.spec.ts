import InMemoryRatingRepository from '@in-memory/in-memory-rating-repository';
import RatingUsecase from '@usecases/implementations/rating-usecase';
import DeleteRatingService from './delete-rating-service';

import User from '@entities/user';
import Barber from '@entities/barber';
import Rating from '@entities/rating';

type SutOutput = {
  ratingRepository: InMemoryRatingRepository;
  sut: DeleteRatingService;
};

const makeSut = (): SutOutput => {
  const ratingRepository = new InMemoryRatingRepository();
  const ratingUsecase = new RatingUsecase(ratingRepository);
  const sut = new DeleteRatingService(ratingRepository, ratingUsecase);

  return { ratingRepository, sut };
};

describe('Delete rating', () => {
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

  it('should be able to delete a rating', async () => {
    const response = await sut.handle(rating.id);

    expect(response).toBeDefined();
  });
});
