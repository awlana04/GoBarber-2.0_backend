import InMemoryRatingRepository from './in-memory-rating-repository';

import User from '@entities/user';
import Barber from '@entities/barber';
import Rating from '@entities/rating';

describe('In memory rating repository', () => {
  const ratingRepository = new InMemoryRatingRepository();

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
      'A very good place, this is my fifth time comming back here. A really peace and profissional barber.',
    userId: user.id,
    barberId: barber.id,
  }).value as Rating;

  ratingRepository.user.push(user);
  ratingRepository.barber.push(barber);
  ratingRepository.rating.push(rating);

  it('should be able to find a rating by id', async () => {
    const response = await ratingRepository.findById(rating.id);

    expect(response!.id).toEqual(rating.id);
  });

  it('should be able to find an user id', async () => {
    const response = await ratingRepository.findUserId(user.id);

    expect(response!.id).toEqual(user.id);
  });

  it('shouldd be able to find a barber id', async () => {
    const response = await ratingRepository.findBarberId(barber.id);

    expect(response!.id).toEqual(barber.id);
  });

  it('should be able to save a rating', async () => {
    const response = await ratingRepository.save({
      stars: 5,
      comment:
        'A good place, this is my first time comming here. A really peace and profissional barber.',
      userId: user.id,
      barberId: barber.id,
    });

    expect(response).toBeDefined();
  });

  it('should be able to update a rating', async () => {
    const response = await ratingRepository.update(rating.id, {
      stars: 4,
      comment:
        'It was a good place, but they cut down a tree. They hate the nature. I hated it! But its a good barber.',
    });

    expect(response).toBeDefined();
  });

  it('should be able to delete a rating', async () => {
    const response = await ratingRepository.delete(rating.id);

    expect(response).toBeDefined();
  });
});
