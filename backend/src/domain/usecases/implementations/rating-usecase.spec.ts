import RatingUsecase from './rating-usecase';

import InMemoryRatingRepository from '@in-memory/in-memory-rating-repository';

import User from '@entities/user';
import Barber from '@entities/barber';
import Rating from '@entities/rating';

type SutOutput = {
  ratingRepository: InMemoryRatingRepository;
  sut: RatingUsecase;
};

const makeSut = (): SutOutput => {
  const ratingRepository = new InMemoryRatingRepository();
  const sut = new RatingUsecase(ratingRepository);

  return { ratingRepository, sut };
};

describe('Rating usecase', () => {
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
    rating: 5,
    comment:
      'A very good place, this is my fifth time comming back here. A really peace and profissioanl barber.',
    userId: user.id,
    barberId: barber.id,
  }).value as Rating;

  ratingRepository.user.push(user);
  ratingRepository.barber.push(barber);
  ratingRepository.rating.push(rating);

  it('should not be able to find an user', () => {
    const response = sut.checkUserExists('invalidID');

    expect(response).rejects.toThrowError();
  });

  it('should be able to find an user', async () => {
    const response = await sut.checkUserExists(user.id);

    expect(response).toBeNull();
  });
});
