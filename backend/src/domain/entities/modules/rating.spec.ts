import crypto from 'crypto';

import Rating from './rating';

describe('Rating entity', () => {
  const rating = 5;
  const comment = 'Very good!';
  const userId = crypto.randomUUID();
  const barberId = crypto.randomUUID();

  it('should be able to create a new rating', () => {
    const response = Rating.create({
      rating,
      comment,
      userId,
      barberId,
    });

    expect(response.props.rating).toEqual(rating);
    expect(response.props.comment).toEqual(comment);
    expect(response.props.userId).toEqual(userId);
    expect(response.props.barberId).toEqual(barberId);

    expect(response).toBeInstanceOf(Rating);
  });
});
