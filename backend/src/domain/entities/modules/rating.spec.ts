import crypto from 'crypto';

import Rating from './rating';

describe('Rating entity', () => {
  it('should be able to create a new rating', () => {
    const rating = 5;
    const comment =
      'A very good place, this is my fifth time comming back here. A really peace and profissioanl barber.';
    const userId = crypto.randomUUID();
    const barberId = crypto.randomUUID();
    const response = Rating.create({
      rating,
      comment,
      userId,
      barberId,
    }).value as Rating;

    console.log(response);

    expect(response.props.rating).toEqual(rating);
    expect(response.comment.value).toEqual(comment);
    expect(response.props.userId).toEqual(userId);
    expect(response.props.barberId).toEqual(barberId);

    expect(response).toBeInstanceOf(Rating);
  });
});
