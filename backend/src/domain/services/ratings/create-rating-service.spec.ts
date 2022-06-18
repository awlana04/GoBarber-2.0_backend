import InMemoryRatingRepository from '@in-memory/in-memory-rating-repository';
import RatingUsecase from '@usecases/implementations/rating-usecase';
import CreateRatingService from './create-rating-service';

import User from '@entities/user';
import Barber from '@entities/barber';
import Rating from '@entities/rating';

type SutOutput = {
  ratingRepository: InMemoryRatingRepository;
  sut: CreateRatingService;
};

const makeSut = (): SutOutput => {
  const ratingRepository = new InMemoryRatingRepository();
  const ratingUsecase = new RatingUsecase(ratingRepository);
  const sut = new CreateRatingService(ratingRepository, ratingUsecase);

  return { ratingRepository, sut };
};

describe('Create rating service', () => {
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

  ratingRepository.user.push(user);
  ratingRepository.barber.push(barber);

  it('should be able to create a new rating', async () => {
    const response = await sut.hamdle({
      stars: 5,
      comment:
        'A very good place, this is my fifth time comming back here. A really peace and profissioanl barber.',
      userId: user.id,
      barberId: barber.id,
    });

    expect(response.value).toBeInstanceOf(Rating);
  });
});
