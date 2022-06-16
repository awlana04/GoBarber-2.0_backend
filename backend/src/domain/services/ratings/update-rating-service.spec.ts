import InMemoryRatingRepository from '@in-memory/in-memory-rating-repository';
import RatingUsecase from '@usecases/implementations/rating-usecase';
import UpdateRatingService from './update-rating-service';

import User from '@entities/user';
import Barber from '@entities/barber';
import Rating from '@entities/rating';

type SutOutput = {
  ratingRepository: InMemoryRatingRepository;
  sut: UpdateRatingService;
};

const makeSut = (): SutOutput => {
  const ratingRepository = new InMemoryRatingRepository();
  const ratingUsecase = new RatingUsecase(ratingRepository);
  const sut = new UpdateRatingService(ratingRepository, ratingUsecase);

  return { ratingRepository, sut };
};

describe('Update rating service', () => {
  const { ratingRepository, sut } = makeSut();

  const user = User.create({
    name: 'John Doe',
    email: 'john@doe.com',
    password: '12345678',
    location: 'Somewhere Over the Rainbow',
  }).value as User;

  const barber = Barber.create({
    name: 'John Doe Barber',
    description: 'A Really Good Place',
    location: 'Somewhere Over the Pocket',
    openOnWeekends: true,
    openAtNight: true,
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

  it('should be able to update the rating', async () => {
    const id = rating.id;
    const stars = 5;
    const comment =
      'It was a good place, but they cut down a tree. They hate the nature. I hated it! But its a good barber.';

    const response = await sut.handle({ id, stars, comment });

    expect(response.value).toBeDefined();
  });
});
